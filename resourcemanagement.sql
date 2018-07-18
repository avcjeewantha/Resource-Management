-- phpMyAdmin SQL Dump
-- version 4.0.4.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jul 18, 2018 at 06:51 PM
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
-- Table structure for table `adminnotices`
--

CREATE TABLE IF NOT EXISTS `adminnotices` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` text NOT NULL,
  `description` text NOT NULL,
  `expiredate` date NOT NULL,
  `noticestatus` varchar(5) NOT NULL DEFAULT 'Yes',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `employeeleaves`
--

CREATE TABLE IF NOT EXISTS `employeeleaves` (
  `leaveid` int(11) NOT NULL AUTO_INCREMENT,
  `id` int(20) NOT NULL,
  `firstname` varchar(60) NOT NULL,
  `lastname` varchar(60) NOT NULL,
  `reason` text NOT NULL,
  `startdate` varchar(20) NOT NULL,
  `enddate` varchar(20) NOT NULL,
  `leavestatus` varchar(10) NOT NULL DEFAULT 'No',
  PRIMARY KEY (`leaveid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=16 ;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`id`, `firstname`, `lastname`, `address`, `city`, `sdate`, `birthday`, `phnnum`, `email`, `java`, `angular`, `nodejs`, `assignedprojects`) VALUES
(1, '', '', '', '', '', '', '', '', '', '', '', ''),
(2, '', '', '', '', '', '', '', '', '', '', '', ''),
(3, '', '', '', '', '', '', '', '', '', '', '', ''),
(4, '', '', '', '', '', '', '', '', '', '', '', ''),
(10, 'kamal', 'saman', 'matara', 'weligama', '2018-07-10', '2018-07-11', '776261833', 'kamalemployee@gmail.com', 'Yes', 'No', 'No', ' '),
(11, 'muditha', 'charani', 'ratanapura', 'weligama', '2018-07-03', '2018-07-11', '712245489', 'mudithaemployee@gmail.com', 'No', 'Yes', 'No', ''),
(12, 'sahan', 'jeaa', 'asdr', 'cas', '2018-07-03', '2018-07-11', '778954622', 'sahanemployee@gmail.com', 'No', 'No', 'Yes', ''),
(13, 'avc', 'cbxbx', 'fgsggsd', 'sfsdfsdf', '2018-07-03', '2018-07-11', '776261899', 'avcemployee@gmail.com', 'Yes', 'No', 'No', ''),
(14, 'perera', 'dcsdc', 'wedewd', 'wedwedew', '2018-07-03', '2018-07-11', '778956422', 'pereraemployee@gmail.com', 'No', 'Yes', 'No', ''),
(15, 'dasun', 'sdvsdv', 'sdsacd', 'sdavasdv', '2018-07-03', '2018-07-11', '778956244', 'dasunemployee@gmail.com', 'No', 'No', 'Yes', '');

-- --------------------------------------------------------

--
-- Table structure for table `prmanagerinquiries`
--

CREATE TABLE IF NOT EXISTS `prmanagerinquiries` (
  `subject` text NOT NULL,
  `inquiry` text NOT NULL,
  `created` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `prmanagernotices`
--

CREATE TABLE IF NOT EXISTS `prmanagernotices` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` text NOT NULL,
  `description` text NOT NULL,
  `expiredate` date NOT NULL,
  `noticestatus` varchar(5) NOT NULL DEFAULT 'Yes',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `projectmanagerleaves`
--

CREATE TABLE IF NOT EXISTS `projectmanagerleaves` (
  `leaveid` int(11) NOT NULL AUTO_INCREMENT,
  `id` int(20) NOT NULL,
  `firstname` varchar(30) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `reason` text NOT NULL,
  `startdate` varchar(20) NOT NULL,
  `enddate` varchar(20) NOT NULL,
  `leavestatus` varchar(10) NOT NULL DEFAULT 'No',
  PRIMARY KEY (`leaveid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

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

-- --------------------------------------------------------

--
-- Table structure for table `resourcemanagerleaves`
--

CREATE TABLE IF NOT EXISTS `resourcemanagerleaves` (
  `leaveid` int(11) NOT NULL AUTO_INCREMENT,
  `id` int(20) NOT NULL,
  `firstname` varchar(60) NOT NULL,
  `lastname` varchar(200) NOT NULL,
  `reason` text NOT NULL,
  `startdate` varchar(20) NOT NULL,
  `enddate` varchar(20) NOT NULL,
  `leavestatus` varchar(10) NOT NULL DEFAULT 'No',
  PRIMARY KEY (`leaveid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `rsmanagerinquiries`
--

CREATE TABLE IF NOT EXISTS `rsmanagerinquiries` (
  `subject` text NOT NULL,
  `inquiry` text NOT NULL,
  `created` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `rsmanagernotices`
--

CREATE TABLE IF NOT EXISTS `rsmanagernotices` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` text NOT NULL,
  `description` text NOT NULL,
  `expiredate` date NOT NULL,
  `noticestatus` varchar(5) NOT NULL DEFAULT 'Yes',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=16 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `address`, `email`, `password`, `type`) VALUES
(1, 'Admin', 'Admin', '', 'admin@gmail.com', 'úƒþÿ²ÊB‡1T8}kx', 'admin'),
(2, 'Project', 'Manager', '', 'projectmanager@gmail.com', 'úƒþÿ²ÊB‡1T8}kx', 'projectmanager'),
(3, 'Resource', 'Manager', '', 'resourcemanager@gmail.com', 'úƒþÿ²ÊB‡1T8}kx', 'resourcemanager'),
(4, '', '', '', '', '', ''),
(10, 'kamal', 'saman', 'matara', 'kamalemployee@gmail.com', 'úƒþÿ²ÊB‡1T8}kx', 'employee');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
