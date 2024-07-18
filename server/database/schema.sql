CREATE TABLE role (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE user (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    firstname VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL,
    email VARCHAR(120) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role_id INT UNSIGNED DEFAULT 1
);

CREATE TABLE category (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(80) NOT NULL
);

CREATE TABLE article (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    reference VARCHAR(255) NOT NULL,
    description TEXT,
    image VARCHAR(255),
    date DATE,
    category_id INT UNSIGNED,
    FOREIGN KEY (category_id) REFERENCES category (id),
    user_id INT UNSIGNED,
    FOREIGN KEY (user_id) REFERENCES user (id)
);

CREATE TABLE favoris (
    article_id INT UNSIGNED,
    user_id INT UNSIGNED,
    FOREIGN KEY (article_id) REFERENCES article (id),
    FOREIGN KEY (user_id) REFERENCES user (id)
);
-- creation roles :

INSERT INTO role (name) VALUE ('user'), ('admin');