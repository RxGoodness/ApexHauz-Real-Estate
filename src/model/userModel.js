CREATE TABLE `Apexhauz`.`users` (
    `id` INT NOT NULL AUTO_INCREMENT ,
    `is_admin` VARCHAR(45) NOT NULL ,
    
     `first_name` VARCHAR(45) NOT NULL ,
      `last_name` VARCHAR(45) NOT NULL ,
       `email` VARCHAR(45) NOT NULL ,
        `phone` VARCHAR(45) NOT NULL ,
         `password` TEXT NOT NULL ,
          `status` VARCHAR(10) NOT NULL DEFAULT 'active' ,
           PRIMARY KEY (`id`)) 
           ENGINE = UsersDB;