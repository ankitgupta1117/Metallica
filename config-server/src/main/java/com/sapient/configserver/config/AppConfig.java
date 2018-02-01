package com.sapient.configserver.config;

import oracle.jdbc.pool.OracleDataSource;
import oracle.ucp.jdbc.PoolDataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.cloud.config.server.environment.EnvironmentRepository;
import org.springframework.cloud.config.server.environment.JdbcEnvironmentRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.core.env.Environment;
import org.springframework.jdbc.core.JdbcTemplate;

import javax.sql.DataSource;
import javax.validation.constraints.NotNull;
import java.sql.SQLException;

/**
 * Created by agu187 on 1/13/2018.
 */
@Configuration
public class AppConfig{
    @Bean
    public JdbcTemplate jdbcTemplate(DataSource dataSource){
        return new JdbcTemplate(dataSource);
    }

//    @Primary
    @Bean
    public EnvironmentRepository jdbcEnvironmentRepository(JdbcTemplate jdbcTemplate){
        return new DBEnvironmentRepository(jdbcTemplate);
    }

}


@Configuration
@ConfigurationProperties(prefix = "oracle")
class OracleConfig {
    @NotNull
    private String user;
    @NotNull
    private String password;
    @NotNull
    private String url;

    @Bean
    OracleDataSource dataSource() throws SQLException {
        OracleDataSource ds = new OracleDataSource();
        ds.setUser(user);
        ds.setPassword(password);
        ds.setURL(url);
        ds.setImplicitCachingEnabled(true);
        ds.setFastConnectionFailoverEnabled(true);
        return ds;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}
