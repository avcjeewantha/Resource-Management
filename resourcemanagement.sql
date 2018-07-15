-- phpMyAdmin SQL Dump
-- version 4.0.4.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jul 15, 2018 at 01:43 PM
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
-- Table structure for table `employeeleaves`
--

CREATE TABLE IF NOT EXISTS `employeeleaves` (
  `id` int(20) NOT NULL,
  `firstname` varchar(60) NOT NULL,
  `lastname` varchar(60) NOT NULL,
  `reason` text NOT NULL,
  `startdate` varchar(20) NOT NULL,
  `enddate` varchar(20) NOT NULL,
  `leavestatus` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `employeeleaves`
--

INSERT INTO `employeeleaves` (`id`, `firstname`, `lastname`, `reason`, `startdate`, `enddate`, `leavestatus`) VALUES
(4, 'Employee', 'Employee', 'referfrer', '2018-07-10', '2018-07-05', ''),
(4, 'Employee', 'Employee', 'erfer', '2018-07-10', '2018-07-05', '');

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE IF NOT EXISTS `employees` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(50) NOT NULL,
  `lastname` varchar(200) NOT NULL,
  `address` varchar(600) NOT NULL,
  `city` varchar(20) NOT NULL,
  `sdate` varchar(10) NOT NULL,
  `birthday` varchar(10) NOT NULL,
  `phnnum` varchar(20) NOT NULL,
  `email` varchar(100) NOT NULL,
  `java` varchar(8) NOT NULL,
  `angular` varchar(8) NOT NULL,
  `nodejs` varchar(8) NOT NULL,
  `assignedprojects` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`id`, `firstname`, `lastname`, `address`, `city`, `sdate`, `birthday`, `phnnum`, `email`, `java`, `angular`, `nodejs`, `assignedprojects`) VALUES
(1, '', '', '', '', '', '', '', '', '', '', '', ''),
(2, '', '', '', '', '', '', '', '', '', '', '', ''),
(3, '', '', '', '', '', '', '', '', '', '', '', ''),
(4, 'Employee', 'Employee', '', '', '', '', '', 'employee@gmail.com', '', '', '', ''),
(10, 'kamal', 'saman', 'matara', 'weligama', '2018-07-10', '2018-07-11', '776261833', 'kamalemployee@gmail.com', 'Yes', 'No', 'Yes', '');

-- --------------------------------------------------------

--
-- Table structure for table `projectmanagerleaves`
--

CREATE TABLE IF NOT EXISTS `projectmanagerleaves` (
  `id` int(20) NOT NULL,
  `firstname` varchar(30) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `reason` text NOT NULL,
  `startdate` varchar(20) NOT NULL,
  `enddate` varchar(20) NOT NULL,
  `leavestatus` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `projectmanagerleaves`
--

INSERT INTO `projectmanagerleaves` (`id`, `firstname`, `lastname`, `reason`, `startdate`, `enddate`, `leavestatus`) VALUES
(2, 'Project', 'Manager', 'fefgref', '2018-07-10', '2018-07-05', ''),
(2, 'Project', 'Manager', 'sfrgfefr', '2018-07-10', '2018-07-05', ''),
(2, 'Project', 'Manager', 'efrerfer', '2018-07-18', '2018-07-27', '');

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE IF NOT EXISTS `projects` (
  `id` int(11) NOT NULL,
  `projectname` varchar(200) NOT NULL,
  `numofemployees` int(20) NOT NULL,
  `budget` text NOT NULL,
  `sdate` varchar(20) NOT NULL,
  `edate` varchar(20) NOT NULL,
  `java` varchar(5) NOT NULL,
  `angular` varchar(5) NOT NULL,
  `nodejs` varchar(5) NOT NULL,
  `assignedemployees` varchar(30) NOT NULL,
  `assigned` varchar(5) NOT NULL DEFAULT 'No',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`id`, `projectname`, `numofemployees`, `budget`, `sdate`, `edate`, `java`, `angular`, `nodejs`, `assignedemployees`, `assigned`) VALUES
(1, 'test', 2, '1456', '2018-07-03', '2018-07-27', 'Yes', 'No', 'Yes', '', 'No');

-- --------------------------------------------------------

--
-- Table structure for table `resourcemanagerleaves`
--

CREATE TABLE IF NOT EXISTS `resourcemanagerleaves` (
  `id` int(20) NOT NULL,
  `firstname` varchar(60) NOT NULL,
  `lastname` varchar(200) NOT NULL,
  `reason` text NOT NULL,
  `startdate` varchar(20) NOT NULL,
  `enddate` varchar(20) NOT NULL,
  `leavestatus` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `resourcemanagerleaves`
--

INSERT INTO `resourcemanagerleaves` (`id`, `firstname`, `lastname`, `reason`, `startdate`, `enddate`, `leavestatus`) VALUES
(3, 'Resource', 'Manager', 'sdasd', '2018-07-10', '2018-07-05', '');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(20) NOT NULL,
  `lastname` varchar(60) NOT NULL,
  `address` text NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(20) NOT NULL,
  `type` varchar(15) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `address`, `email`, `password`, `type`) VALUES
(1, 'Admin', 'Admin', '', 'admin@gmail.com', 'úƒþÿ²ÊB‡1T8}kx', 'admin'),
(2, 'Project', 'Manager', '', 'projectmanager@gmail.com', 'úƒþÿ²ÊB‡1T8}kx', 'projectmanager'),
(3, 'Resource', 'Manager', '', 'resourcemanager@gmail.com', 'úƒþÿ²ÊB‡1T8}kx', 'resourcemanager'),
(4, 'Employee', 'Employee', '', 'employee@gmail.com', 'úƒþÿ²ÊB‡1T8}kx', 'employee'),
(10, 'kamal', 'saman', 'matara', 'kamalemployee@gmail.com', 'úƒþÿ²ÊB‡1T8}kx', 'employee');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
