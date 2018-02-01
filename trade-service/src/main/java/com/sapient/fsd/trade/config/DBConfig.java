package com.sapient.fsd.trade.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.support.PropertySourcesPlaceholderConfigurer;
import org.springframework.core.env.Environment;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.PlatformTransactionManager;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.sql.DataSource;
import java.util.Properties;

/**
 * Created by agu187 on 1/11/2018.
 */
@Configuration
public class DBConfig {

    @Autowired
    Environment environment;

    @Bean
    public static PropertySourcesPlaceholderConfigurer propertyResourceConfigurer(){
        return new PropertySourcesPlaceholderConfigurer();
    }

    @Bean
    public DataSource dataSource(@Value("${db.className}") final String className
                          ,@Value("${db.user}") final String user
                          ,@Value("${db.password}") final String password
                          ,@Value("${db.url}") final String url
    ){
        DriverManagerDataSource ds  = new DriverManagerDataSource();
        ds.setDriverClassName(className);
        ds.setUsername(user);
        ds.setUrl(url);
        ds.setPassword(password);
        return ds;
    }

    @Bean
    public LocalContainerEntityManagerFactoryBean entityManagerFactory(DataSource dataSource){
        LocalContainerEntityManagerFactoryBean em = new LocalContainerEntityManagerFactoryBean();
        em.setJpaVendorAdapter(new HibernateJpaVendorAdapter());

        Properties hibernateProperties = new Properties();
        hibernateProperties.put("hibernate.dialect", environment.getRequiredProperty("hibernate.dialect"));
        hibernateProperties.put("hibernate.show_sql", environment.getRequiredProperty("hibernate.show_sql"));
        hibernateProperties.put("hibernate.format_sql", environment.getRequiredProperty("hibernate.format_sql"));
        em.setJpaProperties(hibernateProperties);
        em.setPersistenceUnitName("ReferenceDataPU");
        em.setDataSource(dataSource);
        em.setPackagesToScan(new String[] { "com.sapient.fsd.trade.entities" });

        return em;
    }

    /*@Bean
    public LocalSessionFactoryBean sessionFactory (DataSource ds){
        LocalSessionFactoryBean sessionFactoryBean  =new LocalSessionFactoryBean();
        sessionFactoryBean.setDataSource(ds);
        Properties hibernateProperties = new Properties();
        hibernateProperties.put("hibernate.dialect", environment.getRequiredProperty("hibernate.dialect"));
        hibernateProperties.put("hibernate.show_sql", environment.getRequiredProperty("hibernate.show_sql"));
        hibernateProperties.put("hibernate.format_sql", environment.getRequiredProperty("hibernate.format_sql"));
        sessionFactoryBean.setHibernateProperties(hibernateProperties);
        sessionFactoryBean.setPackagesToScan("com.sapient.fsd.trade.entities");
        return sessionFactoryBean;
    }
*/
    @Bean
    public PlatformTransactionManager transactionManager(EntityManagerFactory emf){
        return new JpaTransactionManager(emf);
    }


}
