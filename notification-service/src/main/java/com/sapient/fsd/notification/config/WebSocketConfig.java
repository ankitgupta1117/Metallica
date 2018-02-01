package com.sapient.fsd.notification.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.*;

/**
 * Created by agu187 on 1/26/2018.
 */
@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig extends AbstractWebSocketMessageBrokerConfigurer{

    public void configureMessageBroker(MessageBrokerRegistry registry){
        registry.enableSimpleBroker("/trade","/market");
    }

    @Override
    public void registerStompEndpoints(StompEndpointRegistry stompEndpointRegistry) {
        stompEndpointRegistry.addEndpoint("/notification-websocket")
                .setAllowedOrigins("*")
                .withSockJS();
    }
}
