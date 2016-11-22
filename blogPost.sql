CREATE TABLE IF NOT EXISTS `blogPost` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `blogPost` text NOT NULL,
  PRIMARY KEY (`id`)
)
INSERT INTO `blogPost` (`id`, `name`, `blogPost`) VALUES
(2, 'Matt Ward', 'Another exciting blog post...'),
(3, 'Zach', 'Today is a good day.'),
