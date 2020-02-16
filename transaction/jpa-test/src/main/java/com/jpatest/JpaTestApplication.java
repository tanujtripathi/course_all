package com.jpatest;


import com.jpatest.entity.Employee;
import com.jpatest.entity.UserDetails;
import com.jpatest.entity.Vehicle;
import com.jpatest.entity.UserVehicle;
import com.jpatest.repository.EmployeeRepository;
import com.jpatest.repository.UserDetailsRepository;
import com.jpatest.repository.UserVehicleRepository;
import com.jpatest.repository.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.core.NestedRuntimeException;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementSetter;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.PreparedStatement;
import java.sql.SQLException;

@SpringBootApplication
public class JpaTestApplication {

    public static void main(String[] args) {
        SpringApplication.run(JpaTestApplication.class, args);
    }

}

@RestController
class Test {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private VehicleRepository vehicleRepository;

    @Autowired
    private UserDetailsRepository userDetailsRepository;

    @Autowired
    private UserVehicleRepository userVehicleRepository;

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @GetMapping("/hello")
    public void run() {
        Employee employee = new Employee();
        employee.setName("Tanuj");

        // Vehicle 1
        Vehicle activa = new Vehicle();
        activa.setVehicleName("Activa");
        // activa.setEmployee(employee);

        // Vehicle 2
        Vehicle vespa = new Vehicle();
        vespa.setVehicleName("Vespa");
        //vespa.setEmployee(employee);

        employee.getVehicles().add(activa);
        employee.getVehicles().add(vespa);

        //  employeeRepository.save(employee);
        // jdbcTemplate.
    }

    @GetMapping("/hello1")
    @Transactional
    public void second() throws Exception {
        saveInUserDetails();

    }


    public void saveInUserDetails() throws Exception {
        UserDetails userDetails = new UserDetails();
        userDetails.setUserName("Tanujj");

        UserVehicle vehicle1 = new UserVehicle();
        vehicle1.setVehicleName("Hondaa");
        vehicle1.setUser(userDetails);

        UserVehicle vehicle2 = new UserVehicle();
        vehicle2.setVehicleName("Swifta");
        vehicle2.setUser(userDetails);

        userDetails.getVehicle().add(vehicle1);
        userDetails.getVehicle().add(vehicle2);

        userDetailsRepository.save(userDetails);
    }

    @GetMapping("/hello2")
    @Transactional
    public void a() {
        jdbcTemplate.update("insert into some(id, name) values (?,?)", preparedStatement -> {
            preparedStatement.setInt(1, 12);
            preparedStatement.setString(2, "Tanuj");
        });

        jdbcTemplate.update("insert into some(name) values (?)", preparedStatement -> {
            preparedStatement.setString(1, "Tanuj");
        });
    }
}


