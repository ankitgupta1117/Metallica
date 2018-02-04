package com.sapient.fsd;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.oauth2.client.EnableOAuth2Sso;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Map;

/**
 * Created by agu187 on 1/14/2018.
 */

@SpringBootApplication
@EnableDiscoveryClient
@EnableZuulProxy
@EnableOAuth2Sso
@RestController
public class Application extends WebSecurityConfigurerAdapter {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @RequestMapping(value = "/user")
    public String user(Authentication authentication) {
        Map<String, String> details = (Map) ((OAuth2Authentication) authentication).getUserAuthentication().getDetails();
        String userName = details.get("name");
        System.out.println( userName);
        return "\""+userName+"\"";

    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests().anyRequest().authenticated()
                .and()
                .csrf().disable();
    }

}
