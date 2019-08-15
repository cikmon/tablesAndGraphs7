package com.example.tablestndgraphs.controllers;

import com.example.tablestndgraphs.models.RateToHryvnia;
import com.google.gson.Gson;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.messaging.simp.annotation.SubscribeMapping;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Controller;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@Controller
public class WebSocketController {
    private static final Logger log = LogManager.getLogger(MainRestController.class);

    private static final String SENDING_URL = "/topic/server-broadcaster";
    private static final String RECEIVING_URL = "/server-receiver";

    private final SimpMessagingTemplate template;
    private String message = "";

    @Autowired
    public WebSocketController(SimpMessagingTemplate template) {
        this.template = template;
    }

    @MessageMapping(RECEIVING_URL)
    public void onReceivedMessage(String message) {
        System.out.println("New message received : " + message);
    }

    @SubscribeMapping(SENDING_URL)
    public String onSubscribe() {
        return "SUBSCRIBED : " + message;
    }

    @Scheduled(fixedRate = 4000)
    public void sendMessage() {
        template.convertAndSend(SENDING_URL, buildNextMessage());
    }

    private String buildNextMessage() { return getRateToHryvnia(); }



    public String getRateToHryvnia(){
        log.info("getRateToHryvnia");

        List<String> rateToHryvnia1List= new ArrayList<>();
        rateToHryvnia1List.add( Double.toString(23+Math.random()*7));
        rateToHryvnia1List.add( Double.toString(23+Math.random()*7));
        rateToHryvnia1List.add( Double.toString(23+Math.random()*7));
        rateToHryvnia1List.add( Double.toString(23+Math.random()*7));

        List<String> rateToHryvnia1List2= new ArrayList<>();
        rateToHryvnia1List2.add( Double.toString(28+Math.random()*10));
        rateToHryvnia1List2.add( Double.toString(28+Math.random()*10));
        rateToHryvnia1List2.add( Double.toString(28+Math.random()*10));
        rateToHryvnia1List2.add( Double.toString(28+Math.random()*10));

        RateToHryvnia rateToHryvnia1=new RateToHryvnia("USD",rateToHryvnia1List);
        RateToHryvnia rateToHryvnia2=new RateToHryvnia("EUR",rateToHryvnia1List2);

        List<RateToHryvnia> listtmp = new ArrayList<>();
        listtmp.add(rateToHryvnia1);
        listtmp.add(rateToHryvnia2);

        return new Gson().toJson(listtmp);
    }


}
