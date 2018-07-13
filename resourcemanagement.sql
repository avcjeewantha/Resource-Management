-- phpMyAdmin SQL Dump
-- version 4.0.4.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jul 13, 2018 at 10:26 AM
-- Server version: 5.6.11
-- PHP Version: 5.5.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `resourcemanagement`
--
CREATE DATABASE IF NOT EXISTS `resourcemanagement` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `resourcemanagement`;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(10) NOT NULL,
  `firstname` varchar(20) NOT NULL,
  `lastname` varchar(60) NOT NULL,
  `address` text NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(20) NOT NULL,
  `type` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `address`, `email`, `password`, `type`) VALUES
(1, 'Admin', '', '', 'admin@gmail.com', 'úƒþÿ²ÊB‡1T8}kx', 'admin'),
(2, 'Resource', 'Manager', '', 'resourcemanager@gmail.com', 'úƒþÿ²ÊB‡1T8}kx', 'resourcemanager'),
(3, 'Project', 'Manager', '', 'projectmanager@gmail.com', 'úƒþÿ²ÊB‡1T8}kx', 'projectmanager'),
(4, 'Employee', 'Employee', '', 'employee@gmail.com', 'úƒþÿ²ÊB‡1T8}kx', 'employee');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
