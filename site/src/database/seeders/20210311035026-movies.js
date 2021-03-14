'use strict';
// status: 0 = not exists, 1 = exist
const movies = [
	{
		title: 'La La Land',
		description: 'While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.',
		price: 1.1,
		year: 2016,
		length: 1,
		image: 'la-la-land.jpg',
		trailer: 'https://www.youtube.com/watch?v=EDvJBDXV2tA',
		movie: 'https://www.youtube.com/watch?v=EDvJBDXV2tA',
		genre_id: 7,
		category_id: 1,
		status: 1,
		created_at: new Date()
	},
	{
		title: 'The Avengers',
		description: 'Earth\'s mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.',
		price: 95,
		year: 2012,
		length: 243,
		image: 'the-avengers-2012.png',
		trailer: 'https://www.youtube.com/watch?v=4mwtDHovB3w',
		movie: 'https://www.youtube.com/watch?v=4mwtDHovB3w',
		genre_id: 1,
		category_id: 2,
		status: 1,
		created_at: new Date()
	},
	{
		title: 'Joker',
		description: 'In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.',
		price: 180,
		year: 2019,
		length: 122,
		image: 'joker-2019.jpg',
		trailer: 'https://www.youtube.com/watch?v=8ZZ1l7QCVGE',
		movie: 'https://www.youtube.com/watch?v=8ZZ1l7QCVGE',
		genre_id: 12,
		category_id: 5,
		status: 1,
		created_at: new Date()
	},
	{
		title: 'Cars 2',
		description: 'Star race car Lightning McQueen and his pal Mater head overseas to compete in the World Grand Prix race. But the road to the championship becomes rocky as Mater gets caught up in an intriguing adventure of his own: international espionage.',
		price: 122,
		year: 2011,
		length: 106,
		image: 'cars-2.jpg',
		trailer: 'https://www.youtube.com/watch?v=PiMXLiNINJ8',
		movie: 'https://www.youtube.com/watch?v=PiMXLiNINJ8',
		genre_id: 15,
		category_id: 1,
		status: 1,
		created_at: new Date()
	},
	{
		title: 'El Rey León (2019)',
		description: 'After the murder of his father, a young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery.',
		price: 255,
		year: 2019,
		length: 108,
		image: 'el-rey-leon-2019.jpg',
		trailer: 'https://www.youtube.com/watch?v=mb79ctR-E-c',
		movie: 'https://www.youtube.com/watch?v=mb79ctR-E-c',
		genre_id: 15,
		category_id: 1,
		status: 1,
		created_at: new Date()
	},
	{
		title: 'Toy Story 4',
		description: 'When a new toy called "Forky" joins Woody and the gang, a road trip alongside old and new friends reveals how big the world can be for a toy.',
		price: 250,
		year: 2019,
		length: 100,
		image: 'toy-story-4.jpg',
		trailer: 'https://www.youtube.com/watch?v=f33yJZ5uOpU',
		movie: 'https://www.youtube.com/watch?v=f33yJZ5uOpU',
		genre_id: 15,
		category_id: 1,
		status: 1,
		created_at: new Date()
	},
	{
		title: 'Cars',
		description: 'A hot-shot race-car named Lightning McQueen gets waylaid in Radiator Springs, where he finds the true meaning of friendship and family.',
		price: 123,
		year: 2006,
		length: 117,
		image: 'cars.jpg',
		trailer: 'https://www.youtube.com/embed/wTF4G7pXBB8',
		movie: 'https://www.youtube.com/embed/wTF4G7pXBB8',
		genre_id: 15,
		category_id: 1,
		status: 1,
		created_at: new Date()
	},
	{
		title: 'Bloodshot',
		description: 'Ray Garrison, a slain soldier, is re-animated with superpowers.',
		price: 50,
		year: 2020,
		length: 109,
		image: 'bloodshot.jpeg',
		trailer: 'https://www.youtube.com/embed/5nOea-_3iKI',
		movie: 'https://www.youtube.com/embed/5nOea-_3iKI',
		genre_id: 8,
		category_id: 4,
		status: 1,
		created_at: new Date()
	},
	{
		title: 'El Rey León',
		description: 'Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.',
		price: 250,
		year: 1994,
		length: 88,
		image: 'el-rey-leon-1994.jpg',
		trailer: 'https://www.youtube.com/embed/bjJvvrKl83M',
		movie: 'https://www.youtube.com/embed/bjJvvrKl83M',
		genre_id: 15,
		category_id: 1,
		status: 1,
		created_at: new Date()
	},
	{
		title: 'Toy Story',
		description: 'A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy\'s room.',
		price: 150,
		year: 1995,
		length: 81,
		image: 'toy-story.jpg',
		trailer: 'https://www.youtube.com/embed/VhCDgv4x_pU',
		movie: 'https://www.youtube.com/embed/VhCDgv4x_pU',
		genre_id: 15,
		category_id: 1,
		status: 1,
		created_at: new Date()
	}
];

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert('movies', movies, {});
		
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('movies', null, {});
		
	}
};