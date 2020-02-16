package com.jpatest.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MyService {

    @Autowired
    private DaoInterface daoInterface;

    public void save() {
        daoInterface.save();
    }
}
