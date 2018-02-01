package com.sapient.fsd.refdata;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

/**
 * Created by agu187 on 1/12/2018.
 */

@SpringBootApplication
@EnableJpaRepositories
@EnableDiscoveryClient
public class Application {

    public static void main(String[] args) {
       SpringApplication.run(Application.class,args);
    }
}
