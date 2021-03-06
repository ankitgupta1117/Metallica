package com.sapient.configserver.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.cloud.config.environment.Environment;
import org.springframework.cloud.config.environment.PropertySource;
import org.springframework.cloud.config.server.environment.EnvironmentRepository;
import org.springframework.cloud.config.server.environment.JdbcEnvironmentRepository;
import org.springframework.core.Ordered;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.util.StringUtils;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.*;

/**
 * Created by agu187 on 1/14/2018.
 */
@ConfigurationProperties("spring.cloud.config.server.jdbc")
public class DBEnvironmentRepository/* implements EnvironmentRepository, Ordered*/ extends JdbcEnvironmentRepository {

    private static final String DEFAULT_SQL = "SELECT KEY, VALUE from PROP_CONFIG where APPLICATION=? and PROFILE=?";
    private int order = Ordered.LOWEST_PRECEDENCE - 10;
    private final JdbcTemplate jdbc;
    private String sql = DEFAULT_SQL;
    private final PropertiesResultSetExtractor extractor = new PropertiesResultSetExtractor();

    public DBEnvironmentRepository(JdbcTemplate jdbc) {
        super(jdbc);
        this.jdbc = jdbc;
    }

    public void setSql(String sql) {
        this.sql = sql;
    }

    public String getSql() {
        return this.sql;
    }

    @Override
    public Environment findOne(String application, String profile, String label) {
        String config = application;
        if (StringUtils.isEmpty(label)) {
            label = "master";
        }
        if (StringUtils.isEmpty(profile)) {
            profile = "default";
        }
        if (!profile.startsWith("default")) {
            profile = "default," + profile;
        }
        String[] profiles = StringUtils.commaDelimitedListToStringArray(profile);
        Environment environment = new Environment(application, profiles, null, null,
                null);
        if (!config.startsWith("application")) {
            config = "application," + config;
        }
        List<String> applications = new ArrayList<String>(new LinkedHashSet<>(
                Arrays.asList(StringUtils.commaDelimitedListToStringArray(config))));
        List<String> envs = new ArrayList<String>(new LinkedHashSet<>(Arrays.asList(profiles)));
        Collections.reverse(applications);
        Collections.reverse(envs);
        for (String app : applications) {
            for (String env : envs) {
                Map<String, String> next = (Map<String, String>) jdbc.query(this.sql,
                        new Object[] { app, env }, this.extractor);
                if (!next.isEmpty()) {
                    environment.add(new PropertySource(app + "-" + env, next));
                }
            }
        }
        return environment;
    }

    @Override
    public int getOrder() {
        return order;
    }

    public void setOrder(int order) {
        this.order = order;
    }

}

class PropertiesResultSetExtractor implements ResultSetExtractor<Map<String, String>> {

    @Override
    public Map<String, String> extractData(ResultSet rs)
            throws SQLException, DataAccessException {
        Map<String, String> map = new LinkedHashMap<>();
        while (rs.next()) {
            map.put(rs.getString(1), rs.getString(2));
        }
        return map;
    }

}
