package com.example.tablestndgraphs.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RateToHryvnia {
    public String  currency;
    private List<String> data;
}
