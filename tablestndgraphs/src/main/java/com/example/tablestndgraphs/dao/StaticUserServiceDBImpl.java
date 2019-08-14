package com.example.tablestndgraphs.dao;


import com.example.tablestndgraphs.models.User;
//import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
import com.example.tablestndgraphs.models.UserFullInformation;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class StaticUserServiceDBImpl implements StaticUserServiceDB , UserDetailsService
{
    private List<User> userList = new ArrayList<>();
    private List<UserFullInformation> userFullInformations = new ArrayList<>();

    @PostConstruct
    private void cteateBD(){
        // pass 12345678
        User user1= new User("1", "cikmon91@gmail.com", "cikmon91@mail.com", "$2a$12$0.X80xfRSfWcDQSLma7E7ODfCnQJINbzTtqJROmVcfyWR.MzwMk/K",
                "Dmitriy", "Ivanov", "ADMIN");
        User user2= new User("2", "cikmon92@gmail.com", "cikmon91@gmail.com", "123",
                "Dmitriy", "Ivanov", "ADMIN");
        User user3= new User("3", "cikmon93@gmail.com", "cikmon91@gmail.com", "123",
                "Dmitriy", "Ivanov", "ADMIN");
        userList.add(user1);
        userList.add(user2);
        userList.add(user3);

        UserFullInformation userFullInformation1= new UserFullInformation(
                "1", "cikmon91@mail.com",
                "Дмитрий", "Иванов", "Харьков" , "Фрунзе", "8");
        UserFullInformation userFullInformation2= new UserFullInformation(
                "2", "cikmon1@mail.com",
                "Дмитрий", "Сидоров", "харьков" , "Танкопия", "14");
        UserFullInformation userFullInformation3= new UserFullInformation(
                "3", "cikmon2@mail.com",
                "Дмитрий", "Иванов", "Харьков" , "Танкопия", "8");
        UserFullInformation userFullInformation4= new UserFullInformation(
                "4", "cikmon3@mail.com",
                "Денис", "Глебов", "Киев" , "Танкопия", "5");
        UserFullInformation userFullInformation5= new UserFullInformation(
                "5", "cikmon4@mail.com",
                "Александр", "Гребенчинков", "Киев" , "Молочная", "2");

        UserFullInformation userFullInformation6= new UserFullInformation(
                "6", "cikmon5@mail.com",
                "Богдан", "Тарасов", "Киев" , "Грековская", "8");
        UserFullInformation userFullInformation7= new UserFullInformation(
                "7", "cikmon6@mail.com",
                "Татьяна", "Петрова", "Одесса" , "Грековская", "8");
        UserFullInformation userFullInformation8= new UserFullInformation(
                "8", "cikmon7@mail.com",
                "Dmitriy", "Ivanov", "Kharkiv" , "Tankopii", "2");

        userFullInformations.add(userFullInformation1);
        userFullInformations.add(userFullInformation2);
        userFullInformations.add(userFullInformation3);
        userFullInformations.add(userFullInformation4);
        userFullInformations.add(userFullInformation5);
        userFullInformations.add(userFullInformation6);
        userFullInformations.add(userFullInformation7);
        userFullInformations.add(userFullInformation8);

    }

    public List<UserFullInformation> getUsersInformationsList(){return userFullInformations;}

    public User findByLoginn(String userName){
       List<User> usersListTmp = new ArrayList<>();
       userList.forEach(i->{
            if(userName.equals(i.getLogin())){
                usersListTmp.add(i);
            }
        });
       if(usersListTmp.size()>0){return usersListTmp.get(0);}

        return null;
   }


    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {

        User user = findByLoginn(userName);
        if(user == null){
            throw new UsernameNotFoundException("Invalid username or password.");
        }
        return new org.springframework.security.core.userdetails.User(user.getLogin(),user.getPassword(), getAuthority(user));
    }

    private List<SimpleGrantedAuthority> getAuthority(User user) {
        return Arrays.asList(new SimpleGrantedAuthority("ROLE_ADMIN"));
    }
}
