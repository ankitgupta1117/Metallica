package com.sapient.fsd.marketdata.config;

import org.apache.activemq.ActiveMQConnectionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.jms.annotation.EnableJms;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.jms.support.converter.MappingJackson2MessageConverter;
import org.springframework.jms.support.converter.MessageConverter;
import org.springframework.jms.support.converter.MessageType;

import javax.jms.DeliveryMode;

/**
 * Created by agu187 on 1/16/2018.
 */
@Configuration
@EnableJms
public class JmsConfig {

    public static final String SPRING_ACTIVEMQ_BROKER_URL = "spring.activemq.broker-url";
    public static final String SPRING_ACTIVEMQ_USER = "spring.activemq.user";
    public static final String SPRING_ACTIVEMQ_PASSWORD = "spring.activemq.password";

    @Autowired
    Environment env;

    @Bean
    public ActiveMQConnectionFactory connectionFactory() {
        ActiveMQConnectionFactory factory = new ActiveMQConnectionFactory();
        factory.setBrokerURL(env.getProperty(SPRING_ACTIVEMQ_BROKER_URL));
        factory.setUserName(env.getProperty(SPRING_ACTIVEMQ_USER));
        factory.setPassword(env.getProperty(SPRING_ACTIVEMQ_PASSWORD));
        return factory;
    }


    @Bean
    public JmsTemplate jmsTemplate(ActiveMQConnectionFactory connectionFactory, MessageConverter jacksonJmsMessageConverter) {
        JmsTemplate template = new JmsTemplate(connectionFactory);
        template.setDeliveryMode(DeliveryMode.PERSISTENT);
        template.setPubSubNoLocal(false);
        template.setMessageConverter(jacksonJmsMessageConverter);
        return template;
    }

    @Bean
    public MessageConverter jacksonJmsMessageConverter() {
        MappingJackson2MessageConverter converter = new MappingJackson2MessageConverter();
        converter.setTargetType(MessageType.TEXT);
        converter.setTypeIdPropertyName("_type");
        return converter;
    }

}
