-- phpMyAdmin SQL Dump
-- version 4.0.4.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jul 16, 2018 at 10:29 PM
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
  `leaveid` int(11) NOT NULL AUTO_INCREMENT,
  `id` int(20) NOT NULL,
  `firstname` varchar(60) NOT NULL,
  `lastname` varchar(60) NOT NULL,
  `reason` text NOT NULL,
  `startdate` varchar(20) NOT NULL,
  `enddate` varchar(20) NOT NULL,
  `leavestatus` varchar(10) NOT NULL DEFAULT 'No',
  PRIMARY KEY (`leaveid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `employeeleaves`
--

INSERT INTO `employeeleaves` (`leaveid`, `id`, `firstname`, `lastname`, `reason`, `startdate`, `enddate`, `leavestatus`) VALUES
(1, 4, 'Employee', 'Employee', 'vdfvfvf', '2018-07-18', '2018-07-05', 'approved'),
(2, 4, 'Employee', 'Employee', 'cdsdcscsdc', '2018-07-10', '2018-07-27', 'disapprove'),
(3, 4, 'Employee', 'Employee', 'sdvsvsdv', '2018-07-10', '2018-07-27', 'No');

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=12 ;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`id`, `firstname`, `lastname`, `address`, `city`, `sdate`, `birthday`, `phnnum`, `email`, `java`, `angular`, `nodejs`, `assignedprojects`) VALUES
(1, '', '', '', '', '', '', '', '', '', '', '', ''),
(2, '', '', '', '', '', '', '', '', '', '', '', ''),
(3, '', '', '', '', '', '', '', '', '', '', '', ''),
(4, '', '', '', '', '', '', '', '', '', '', '', ''),
(10, 'kamal', 'saman', 'matara', 'weligama', '2018-07-10', '2018-07-11', '776261833', 'kamalemployee@gmail.com', 'Yes', 'No', 'Yes', ''),
(11, 'muditha', 'charani', 'ratanapura', 'weligama', '2018-07-03', '2018-07-11', '712245489', 'mudithaemployee@gmail.com', 'Yes', 'Yes', 'Yes', '');

-- --------------------------------------------------------

--
-- Table structure for table `prmanagerinquiries`
--

CREATE TABLE IF NOT EXISTS `prmanagerinquiries` (
  `subject` text NOT NULL,
  `inquiry` text NOT NULL,
  `created` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `prmanagerinquiries`
--

INSERT INTO `prmanagerinquiries` (`subject`, `inquiry`, `created`) VALUES
('prtext', 'halooo', '2018-07-16');

-- --------------------------------------------------------

--
-- Table structure for table `prmanagernotices`
--

CREATE TABLE IF NOT EXISTS `prmanagernotices` (
  `title` text NOT NULL,
  `description` text NOT NULL,
  `expiredate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `prmanagernotices`
--

INSERT INTO `prmanagernotices` (`title`, `description`, `expiredate`) VALUES
('', 'Helloooo', '2018-07-15'),
('', 'hiiiii', '2018-07-15'),
('', 'gvhgghvh', '2018-07-15'),
('', 'vbcgcghhv', '2018-07-15'),
('', 'fghffttfgvbvbvbvhgytyt', '2018-07-15'),
('jnjnnjjnj', 'njnkjn', '2018-07-15'),
('nvgh', 'vvhgv', '2018-07-15'),
('helllllooooo', 'sampleeee', '2018-07-16');

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `projectmanagerleaves`
--

INSERT INTO `projectmanagerleaves` (`leaveid`, `id`, `firstname`, `lastname`, `reason`, `startdate`, `enddate`, `leavestatus`) VALUES
(1, 2, 'Project', 'Manager', 'svfdvcdsv', '2018-07-03', '2018-07-05', 'disapprove'),
(2, 2, 'Project', 'Manager', 'cdcwcw', '2018-07-10', '2018-07-27', 'disapprove'),
(3, 2, 'Project', 'Manager', 'wecwecwe', '2018-07-10', '2018-07-27', 'approved');

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
  `leaveid` int(11) NOT NULL AUTO_INCREMENT,
  `id` int(20) NOT NULL,
  `firstname` varchar(60) NOT NULL,
  `lastname` varchar(200) NOT NULL,
  `reason` text NOT NULL,
  `startdate` varchar(20) NOT NULL,
  `enddate` varchar(20) NOT NULL,
  `leavestatus` varchar(10) NOT NULL DEFAULT 'No',
  PRIMARY KEY (`leaveid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `resourcemanagerleaves`
--

INSERT INTO `resourcemanagerleaves` (`leaveid`, `id`, `firstname`, `lastname`, `reason`, `startdate`, `enddate`, `leavestatus`) VALUES
(1, 3, 'Resource', 'Manager', 'cascsc', '2018-07-10', '2018-07-05', 'approved'),
(2, 3, 'Resource', 'Manager', 'cdcsdc', '2018-07-10', '2018-07-05', 'disapprove'),
(3, 3, 'Resource', 'Manager', 'sdcsdcdsc', '2018-07-10', '2018-07-05', 'No');

-- --------------------------------------------------------

--
-- Table structure for table `rsmanagerinquiries`
--

CREATE TABLE IF NOT EXISTS `rsmanagerinquiries` (
  `subject` text NOT NULL,
  `inquiry` text NOT NULL,
  `created` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `rsmanagerinquiries`
--

INSERT INTO `rsmanagerinquiries` (`subject`, `inquiry`, `created`) VALUES
('text', 'incc', '2018-07-16');

-- --------------------------------------------------------

--
-- Table structure for table `rsmanagernotices`
--

CREATE TABLE IF NOT EXISTS `rsmanagernotices` (
  `title` text NOT NULL,
  `description` text NOT NULL,
  `expiredate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `rsmanagernotices`
--

INSERT INTO `rsmanagernotices` (`title`, `description`, `expiredate`) VALUES
('sample', 'add notice', '2018-07-16'),
('aqwerdewdwed', 'wefwefwe', '2018-07-16'),
('wefdwefwefwef', 'afqfwfwefwef', '2018-07-16');

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=12 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `address`, `email`, `password`, `type`) VALUES
(1, 'Admin', 'Admin', '', 'admin@gmail.com', 'úƒþÿ²ÊB‡1T8}kx', 'admin'),
(2, 'Project', 'Manager', '', 'projectmanager@gmail.com', 'úƒþÿ²ÊB‡1T8}kx', 'projectmanager'),
(3, 'Resource', 'Manager', '', 'resourcemanager@gmail.com', 'úƒþÿ²ÊB‡1T8}kx', 'resourcemanager'),
(4, '', '', '', '', '', ''),
(10, 'kamal', 'saman', 'matara', 'kamalemployee@gmail.com', 'úƒþÿ²ÊB‡1T8}kx', 'employee'),
(11, 'muditha', 'charani', 'ratanapura', 'mudithaemployee@gmail.com', 'úƒþÿ²ÊB‡1T8}kx', 'employee');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
