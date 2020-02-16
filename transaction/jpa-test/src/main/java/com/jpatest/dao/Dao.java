package com.jpatest.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public class Dao implements DaoInterface {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Override
    @Transactional
    public void save() {
        jdbcTemplate.update("INSERT INTO some(id, name) VALUES (?,?)", preparedStatement -> {
            preparedStatement.setInt(1, 12);
            preparedStatement.setString(2, "Tanuj");
        });

       /* jdbcTemplate.update("INSERT INTO some(name) VALUES (?)", preparedStatement -> {
            preparedStatement.setString(1, "Tanuj");
        });*/
       int c = 1/0;
    }
}