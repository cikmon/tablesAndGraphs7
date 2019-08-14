package com.example.tablestndgraphs.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserFullInformation {

    private String id;
    private String email;
    private String firstname;
    private String lastname;
    private String city;
    private String street;
    private String house;


}
