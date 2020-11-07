/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {

});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {
	'vid1': 'bose.mp4'

});

// Define the images used in the game.
monogatari.assets ('images', {

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {

});


// Define the Characters
monogatari.characters ({
	't': {
		name: 'teacher',
		color: '#5bcaff',
		sprites:{
			normal:'teacher.jpg',
			welcome:'tea.jpg'
		}
	}
});

monogatari.script ({
	// The game starts here.
	'Start': [


	    'show background #ffdddd with fadeIn 20 ',
		'show character t welcome with fadeIn 10',
		'WELCOME ',
		
		{
			'Input': {
				'Text': 'What is your name?',
				'Validation': function (input) {
					return input.trim ().length > 0;
				},
				'Save': function (input) {
					this.storage ({
						player: {
							name: input
						}
					});
					return true;
				},
				'Revert': function () {
					this.storage ({
						player: {
							name: ''
						}
					});
				},
				'Warning': 'You must enter a name!'
			}
		},
		't Hi {{player.name}} Welcome to indian history 101',
		{
			'Choice': {
				'Dialog': 't are you ready to learn about past ',
				'Yes': {
					'Text': 'Yes',
					'Do': 'jump Yes'
				},
				'No': {
					'Text': 'No',
					'Do': 'jump No'
				}
			}
		}
	],

	'Yes': [
		't Thats awesome!',
		't Then you are ready to go ahead and ',
		't I can’t wait to see what history ',
		'jump q1 '
	],

	'No': [

		't ok then see you another time ',
		'end'
	],
	'q1':['show background rgb(255,255,255) with fadeIn 5',
	'show character t normal with fadeIn 6 ',
	't Now i will ask you some questions using audio ,video and images and after that you have to answer the questions',
	't so here is first question',
	't  new leader appeared and suggested a new mode of struggle with the idea of satyagraha !  ',
	'show image gandhi_in_africa.jpg top right with fadeIn',
{'Choice':{'Dialog':'identify the great leader of india',
'Mahatma_gandhi':{
	'Text':'Mahatma gandhi',
	'Do':'jump info'

},
'i_dont_know ':{
	'Text':'englighten me!',
	'Do':'jump info1'
}

}} ],
	'info':['hide image gandhi_in_africa.jpg top right with fadeOut',
	't yes mohandas karamchand gandhi aka Mahatma gandhi ',
	
	'show image newgandhi.jpg  with fadeIn ',
	 't Mahatma Gandhi was leading the workers from Newcastle to Transvaal',
	'hide image newgandhi.jpg with fadeOut 5',
	't When Gandhiji was arrested, thousands of more workers joined the satyagraha against racist laws that denied rights to non-whites',
	
	'jump quiz2'
	],
	'info1':['hide image gandhi_in_africa.jpg top right with fadeOut',
	't this reknowned figure is mohandas karamchand gandhi aka Mahatma gandhi ',
	
	'show image newgandhi.jpg  with fadeIn 10',
	't Mahatma Gandhi was leading the workers from Newcastle to Transvaal.When Gandhiji was arrested, thousands of more workers joined the satyagraha against racist laws that denied rights to non-whites',
	't try the question again',
	'jump q1'
	],

'quiz2':[
'hide character t normal with fadeOut 1',
'show image burning-foreign-made-goods.jpg with fadeIn 2',
't after success of the satyagraha, various other movements gandhi ji organised civil disobedience against whites.Rallies were organised in various cities, workers went on strike in railways workshops etc',
'hide image burning-foreign-made-goods.jpg with fadeOut 1',
'show character t normal with fadeIn 2',
't gandhi ji stressed that non-violence and truth are greatest weapons on earth ',
't now time for question 2',
'hide character t normal with fadeOut 1',
'show image khilafat.jpg with fadeIn 2',
't shown image gives a glimpse pan-Islamist political protest campaign launched by Muslims of British India',
{'Choice':{'Dialog':'identify the movement',
'khilafat':{
	'Text':'khilafat movement',
	'Do':'jump info2'

},
'islam':{
	'Text':'rowlatt satyagraha',
	'Do':'jump info3'
}

}} ],

'info2':['hide image khilafat.jpg with fadeOut 1',

	't yes  khilafat movement  is correct choice',
	'show character t normal with fadeIn 2',
	 't The Khilafat movement, also known as the Indian Muslim movement (1919–24), was a pan-Islamist political protest campaign launched by Muslims of British India ',
	'hide character t normal with fadeOut 1',
	'show image mula.jpg with fadeIn 2 ',
	't  led by Shaukat Ali, Maulana Mohammad Ali Jauhar, Hakim Ajmal Khan,[1][2] and Abul Kalam Azad[3] to restore the caliph of the Ottoman Caliphate, who was considered the leader of Sunni Muslims, as an effective political authority. It was a protest against the sanctions placed on the caliph and the Ottoman Empire after the First World War by the Treaty of Sèvres',
	'hide image mula.jpg with fadeOut 1',
'show character t normal with fadeIn 2',
't lets go to next topic',
'jump quiz3'
	],
'info3':[
'hide image khilafat.jpg with fadeOut 1',

	't NO  khilafat movement  is correct choice',
	'show character t normal with fadeIn 2',
	 't The Khilafat movement, also known as the Indian Muslim movement (1919–24), was a pan-Islamist political protest campaign launched by Muslims of British India ',
	'hide character t normal with fadeOut 1',
	'show image mula.jpg with fadeIn 2 ',
	't  led by Shaukat Ali, Maulana Mohammad Ali Jauhar, Hakim Ajmal Khan,[1][2] and Abul Kalam Azad[3] to restore the caliph of the Ottoman Caliphate, who was considered the leader of Sunni Muslims, as an effective political authority. It was a protest against the sanctions placed on the caliph and the Ottoman Empire after the First World War by the Treaty of Sèvres',
	'hide image mula.jpg with fadeOut 1',
'show character t normal with fadeIn 2',
't you learn  from wrong choice read the next topic all your zeal',
'jump quiz3'

	],
	'quiz3':[
	't ok now for next question ',
	'hide character t normal with fadeOut 1',
	'show image marche_sel.jpg with fadeIn 2 ',
	't this event is a mile stone in indian history a unique satyagraha angainst salt monoply law by british colonial rule?',
	{'Choice':{'Dialog':'identify the movement',
'dandi':{
	'Text':'dandi satyagraha',
	'Do':'jump info4'

},
'randi':{
	'Text':'national congress march',
	'Do':'jump info5'
}

}} ],
'info4':[
'hide image marche_sel.jpg with fadeOut 1',

	't yes very good  dandi satyagraha  is correct choice',
	'show character t normal with fadeIn 2',
	 't The Salt March, also known as the Salt Satyagraha, Dandi March and the Dandi Satyagraha, was an act of nonviolent civil disobedience in colonial India led by Mohandas Karamchand Gandhi. The 25-day march lasted from 12 March 1930 to 6 April 1930 as a direct action campaign of tax resistance and nonviolent protest against the British salt monopoly. Another reason for this march was that the Civil Disobedience Movement needed a strong inauguration ',
	'hide character t normal with fadeOut 1',
	'show image ms.jpg with fadeIn 2 ',
	't  Mahatma Gandhi started this march with 79 of his trusted volunteers.[1] Walking ten miles a day, the march spanned over 240 miles (384 km), from Sabarmati Ashram to Dandi, which was called Navsari at that time (now in the state of Gujarat). Growing numbers of Indians joined them along the way.',

	'hide image ms.jpg with fadeOut 1',
	'show image saltb.jpg with fadeIn 2',
	't  Gandhi broke the salt laws at 6:30 am on 6 April 1930, it sparked large scale acts of civil disobedience against the British Raj salt laws by millions of Indians.',
'hide image saltb.jpg with fadeOut 1',
'show background #ffdddd with fadeIn 2 ',
'show character t welcome with fadeIn 3',
't now i would take  leave while you study hard ',
'thank you folks' ,
'end'
	],
	'info4':[
'hide image marche_sel.jpg with fadeOut 1',

	't dandi satyagraha  is correct choice',
	'show character t normal with fadeIn 2',
	 't The Salt March, also known as the Salt Satyagraha, Dandi March and the Dandi Satyagraha, was an act of nonviolent civil disobedience in colonial India led by Mohandas Karamchand Gandhi. The 25-day march lasted from 12 March 1930 to 6 April 1930 as a direct action campaign of tax resistance and nonviolent protest against the British salt monopoly. Another reason for this march was that the Civil Disobedience Movement needed a strong inauguration ',
	'hide character t normal with fadeOut 1',
	'show image ms.jpg with fadeIn 2 ',
	't  Mahatma Gandhi started this march with 79 of his trusted volunteers.[1] Walking ten miles a day, the march spanned over 240 miles (384 km), from Sabarmati Ashram to Dandi, which was called Navsari at that time (now in the state of Gujarat). Growing numbers of Indians joined them along the way.',

	'hide image ms.jpg with fadeOut 1',
	'show image saltb.jpg with fadeIn 2',
	't  Gandhi broke the salt laws at 6:30 am on 6 April 1930, it sparked large scale acts of civil disobedience against the British Raj salt laws by millions of Indians.',
'hide image saltb.jpg with fadeOut 1',
'show background #ffdddd with fadeIn 2 ',
'show character t welcome with fadeIn 3',
't now i would take  leave while you study hard ',
'thank you folks' ,
'end'
	]











});