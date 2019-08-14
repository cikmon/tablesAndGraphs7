package com.example.tablestndgraphs.dao;

import com.example.tablestndgraphs.models.User;
import com.example.tablestndgraphs.models.UserFullInformation;

import java.util.List;

public interface StaticUserServiceDB {
    User findByLoginn(String userName);
    List<UserFullInformation> getUsersInformationsList();
}
