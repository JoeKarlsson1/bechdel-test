import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import './CaseStudy.scss';

const data = [
	{ name: 'American Sniper', bechdelScore: 2 },
	{ name: 'Birdman', bechdelScore: 1 },
	{ name: 'Boyhood', bechdelScore: 3 },
	{ name: 'Foxcatcher', bechdelScore: 1 },
	{ name: 'Gone Girl', bechdelScore: 3 },
	{ name: 'Grand Budapest', bechdelScore: 1 },
	{ name: 'Imitation Game', bechdelScore: 3 },
	{ name: 'Into The Woods', bechdelScore: 3 },
	{ name: 'Still Alice', bechdelScore: 1 },
	{ name: 'Theory of Everything', bechdelScore: 1 },
	{ name: 'The Judge', bechdelScore: 1 },
	{ name: 'Whiplash', bechdelScore: 1 },
	{ name: 'Wild', bechdelScore: 3 },
];

const CaseStudy = () => (
	<div className="CaseStudy container">
		<h1>case study</h1>
		<div>
			<p>
				The Bechdel Test, popularized by cartoonist Alison Bechdel, uses three
				simple requirements to test whether a film, or any work of fiction,
				features a scene with two women speaking to each other about something
				other than a man. The test is often used to highlight the sexism present
				in the film industry, as a surprising number of films tested do not
				pass, despite the test’s relatively simple requirements. While feminism
				as a concept has become much more socially accepted in recent years, the
				film industry is still largely dominated by men. Not only are the
				majority of speaking roles in films played by men, but important
				behind-the-scenes roles, such as directing and screenwriting, are still
				largely male-dominated as well. In order to get a feel for the current
				state of the film industry using recent data from popular and critically
				acclaimed films, we’ve chosen to analyze thirteen films that were
				nominated for Oscars in 2015 in the following highly-anticipated
				categories: Best Picture, Best Actor, Best Actress, Best Supporting
				Actor, and Best Supporting Actress.
			</p>
			<div className="center">
				<BarChart
					width={900}
					height={250}
					data={data}
					margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
				>
					<XAxis dataKey="name" />
					<YAxis />
					<CartesianGrid />
					<Tooltip />
					<Bar dataKey="Bechdel Score" fill="#8884d8" />
				</BarChart>
			</div>
			<p>
				A quick glance at the Bechdel Test pass/fail data for the 87th Annual
				Academy Awards (originally aired on February 22, 2015) makes the gender
				imbalance immediately clear. Of all of the Oscar nominated films that we
				were able to test, only 38.46% passed the Bechdel Test. This percentage
				is somewhat generous, as only 28.57% of the Best Picture nominees
				passed1 21 the test. The category of Best Picture gives the best general
				overview of the year’s critically acclaimed films, as the Best Picture
				category is not limited by the gender of the lead actors (as are the
				categories of Best Actor and Best Actress). When the Academy has free
				reign to choose the eight films that they feel were the best overall
				films of the year, it’s incredibly revealing to see how those eight
				films stack up in terms of gender. While 28.57% of the Best Picture
				nominees passed the Bechdel Test, it’s also important to note that all
				eight of the nominees were focused on a male-dominated narrative, each
				of them featuring a male lead rather than a female lead.
			</p>
			<p>
				It’s interesting to note the lack of overlap between Best Picture
				nominees and films featuring a nominee for Best Actress. Only one of the
				films featuring a nominee for Best Actress was also nominated for Best
				Picture: The Theory of Everything. What this reveals is the lack of lead
				actresses being featured in Best Picture nominees, which points out the
				Academy’s preference for films with a male-dominated narrative. On the
				other hand, four of the films featuring a nominee for Best Actor were
				also nominated for Best Picture: The Theory of Everything, American
				Sniper, The Imitation Game, and Birdman. It’s easy for Best Picture
				nominees to also feature a nominee for Best Actor when all of the Best
				Picture nominees are led by men. This preference for male-lead
				narratives is also present in the Bechdel Test statistics for films
				featuring a Best Actor nominee versus a Best Actress nominee; while 50%
				of the films featuring a Best Actress nominee pass the test (neither of
				which were also nominated for Best Picture), only 20% of the films
				featuring a Best Actor nominee pass. The Academy’s preference for
				male-dominated films is obvious here. When nominating women for the
				category of Best Actress, they are forced to look outside the canon of
				Best Picture nominees, since very few of the Best Picture nominees
				feature a lead actress .
			</p>
			<p>
				This male bias holds up when films featuring Best Supporting Actor and
				Best Supporting Actress nominees are factored in. On their own, only 20%
				of films featuring a nominee for Best Supporting Actor pass the test,
				while 60% of films featuring a nominee for Best Supporting Actress pass
				-- the imbalance here is clear. The tendency of films with a male lead
				to fail the Bechdel Test suggests that when a film’s narrative is
				dominated by men, female characters are so heavily disregarded that they
				rarely feature in a scene together.
			</p>
			<p>
				This analysis of 2015 Oscar films says a great deal about the film
				industry as a whole. When the majority of the year’s most
				critically-acclaimed films do not pass the Bechdel Test, there is a
				clear issue with the opportunities for women in every area of the film
				industry. Not only are leading roles not nearly as available to women as
				they are to men, but very few women are writing and directing
				Oscar-nominated films. In order to create valuable roles for women,
				women need to be involved in the filmmaking process. We need women
				making films in order to tell important stories about women.
			</p>
			<p>
				There were a few challenges that we faced in this Oscar film analysis
				that should be addressed. The first involved the film Selma, which was
				nominated for Best Picture. The screenplay for this film was not openly
				available, and thus we were unable to include it in our testing. Another
				challenge involved the film Two Days, One Night, which featured Best
				Actress nominee Marion Cotillard. This is a French language film that
				was subtitled in English. Since the screenplay was only available in
				French language, it was not suited for our Bechdel Test tool, so we were
				unable to include it as well.
			</p>
			<p>
				To view more specific data on each film that was analyzed, please visit
				the individual film pages.
			</p>
		</div>
		<Link to="/">
			<button>all films</button>
		</Link>
	</div>
);

export default CaseStudy;
