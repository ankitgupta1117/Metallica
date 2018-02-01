package com.sapient.fsd.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/**
 * Created by agu187 on 1/14/2018.
 */
@Configuration
public class WebConfig {
    @Bean
    public RestTemplate template(){
        RestTemplate t = new RestTemplate();
        return t;
    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurerAdapter() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/api/*").allowedMethods("*").allowedOrigins("*");
                registry.addMapping("/**").allowedMethods("*").allowedOrigins("*");
            }
        };
    }
}
