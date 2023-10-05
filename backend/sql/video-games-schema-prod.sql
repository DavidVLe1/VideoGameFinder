drop database if exists video_games;
create database video_games;
use video_games;

-- create tables and relationships
create table genre (
    genre_id int primary key,
    genre_name varchar(200) not null
);

create table platform (
    platform_id int primary key,
    platform_name varchar(200) not null
);

insert into genre(genre_id, genre_name) values
        (4, 'Action'),
        (51, 'Indie'),
        (3, 'Adventure'),
	(5, 'RPG'),
	(10, 'Strategy'),
        (2, 'Shooter'),
	(40, 'Casual'),
	(14, 'Simulation'),
	(7, 'Puzzle'),
	(11, 'Arcade'),
	(83, 'Platformer'),
	(59, 'Massively Multiplayer'),
	(1, 'Racing'),
	(15, 'Sports'),
	(6, 'Fighting'),
	(19, 'Family'),
	(28, 'Board Games'),
	(34, 'Educational'),
	(17, 'Card');

insert into platform(platform_id, platform_name) values
	(4, 'PC'),
	(187, 'PlayStation 5'),
	(1, 'Xbox One'),
    (18, 'PlayStation 4'),
	(186, 'Xbox Series S/X'),
    (7, 'Nintendo Switch'),
    (3, 'iOS'),
    (21, 'Android'),
    (8, 'Nintendo 3DS'),
    (9, 'Nintendo DS'),
    (13, 'Nintendo DSi'),
    (5, 'macOS'),
    (6, 'Linux'),
	(14, 'Xbox 360'),
	(80, 'Xbox'),
    (16, 'PlayStation 3'),
    (15, 'PlayStation 2'),
    (27, 'PlayStation'),
    (19,' PS Vita'),
    (17, 'PSP'),
    (10, 'Wii U');
-- Wii: 11
-- GameCube: 105
-- Nintendo 64: 83
-- Game Boy Advance: 24
-- Game Boy Color: 43
-- Game Boy: 26
-- SNES: 79
-- NES: 49
-- Classic Macintosh: 55
-- Apple II: 41
-- Commodore / Amiga: 166
-- Atari 7800: 28
-- Atari 5200: 31
-- Atari 2600: 23
-- Atari Flashback: 22
-- Atari 8-bit: 25
-- Atari ST: 34
-- Atari Lynx: 46
-- Atari XEGS: 50
-- Genesis: 167
-- SEGA Saturn: 107
-- SEGA CD: 119
-- SEGA 32X: 117
-- SEGA Master System: 74
-- Dreamcast: 106
-- 3DO: 111
-- Jaguar: 112
-- Game Gear: 77
-- Neo Geo: 12"