package com.example.tablestndgraphs.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
    private String id;
    private String login;
    private String email;
    private String password;
    private String firstname;
    private String lastname;
    private String role;
}
