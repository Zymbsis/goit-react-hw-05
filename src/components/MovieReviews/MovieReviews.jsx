import { renderConditionCheck } from '../../services/default';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import css from './MovieReviews.module.css';
import useMovieAdditionalInformation from '../../services/hooks';

const MovieReviews = () => {
  const { movieInformation, error, loader } = useMovieAdditionalInformation(
    '/reviews',
    'results'
  );

  return (
    <>
      {error && <ErrorMessage />}
      {loader && <h2>GNOM</h2>}
      {renderConditionCheck(movieInformation) && (
        <ul className={css.castList}>
          {movieInformation.map(movie => {
            return (
              <li key={movie.id}>
                <p>{movie.content}</p>
                {'------------------------------'}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default MovieReviews;

// author
// :
// "RADIO1'S MR. MOVIE!-MAD AMI 🌠"
// author_details
// :
// {name: "RADIO1'S MR. MOVIE!-MAD AMI 🌠", username: "Radio1'sMr.Movie!-MadAmi🌠", avatar_path: '/5xKJup6PHf9O52gTxleT4oSkCtd.jpg', rating: 10}
// content
// :
// "\r\n**FABULOUS 🥇🥇🥇🥇 . . . . And , Oh , Yes . . . . Hans Zimmer's Score's Already Got \"OSCAR\" Written On It 😉 ; & EXPECT A WHOLE \" HOST OF OTHER _MAJOR_ NOMINATIONS - AS WELL \"**\r\n\r\nThis Is A **- _B I G_ -** Screen - MINI - Review. Picture Viewed Oct. 07, 2021 ; At Vox Cinemas , U . A . E\r\n\r\n______________________________________________________\r\n\r\nPaul Atreides : \" Fear is the mind-killer. Fear is the little death that brings total obliteration. I will face my fear, and I will permit it to pass over me. When the fear has gone, there will be nothing. Only I will remain \".\r\n\r\n_______________________________________\r\n_______________\r\n\r\n**1.** If you're  one of the -Millions- of people around the world who loved Denis Villeneuve's hauntingly riveting 2015 thriller 'Sicario', ( yours truly included ) ; then strap in for 'one hell of an Interstellar ride, with an -{ EQUALLY }- **\" INTERSTELLAR 🌠 \"** CAST . . . . that -literally- presents itself like a Who's-who of Hollywood's \"Best, And Brightest\". This time around, the unequivocally -{ Prolific }- Academy Award nominated French Canadian director has taken acclaimed American author Frank Herbert's 1965 sci-fi thriller, ( once touted as the world's -Best- selling science fiction novel ), & turned it into a veritable masterpiece of a movie. -Make Sure- to 'keep a special eye out' for Rebecca Ferguson's completely \"Stunning\" portrayal of 'Lady Jessica Atreides' . . . . I can promise that you most certainly -Will Not- regret it. \r\n\r\n**2.** Almost needless to say, the Music, Acting , Cinematography 🔥 , Art-direction, C.g.i, Dramatic pacing & the sprawling, lavish Set-pieces are all, well . . . -{ \" Past Compare \" }- .\r\nWhen it comes to 2021's cinematic 'big budget\" smorgasbord : if you want to see the -Very- best Popcorn Flick \"Sensation\" of the year, it's most unequivocally going to be Bond 25 : 'No Time To Die'. But, on the -other- hand, if you're more in the mood for some -equally- magnificent **\"Artfilm Meets Blockbuster\" ( no seriously )** fare . . . that may -Well- hold you in a state of 'Absolute Rapture' from start to finish, then 'Dune' should most -Definitely- be your first choice. Just make sure to come to said movie with a { Genuinely } open and unbiased --- Heart , And Mind 🙃 . \r\n\r\n**3. \" Final Analysis \" :** The only -{ Pronounced }- lack you will feel, if any at all, is that of -{ Humour }‐ . . . . especially if you're someone who enjoys their big screen delights served with, well, a \"generous\" side of unrestrained -Mirth- . I counted -Literally- only about \"3.5\" barely plausible funny moments in the -Entire- flick. But the obvious reason for that is : it simply -Wouldn't- have worked within this sort of a 'Deadly Serious' dark, dramatic, & super futuristic setting ( 10,191 \"a.g\", to be precise ). So, having taken -that- aspect of the production into consideration ; it really ended up -_NOT_ - bothering me very much, AT ALL. Thus, in sum . . . . I was utterly **-{ MESMERIZED }-** by \" Dune : Part 1 \" and hence ; I chose to give it a **\" Wholehearted, Adoring, MEGA-APPRECIATIVE 13 Marks Out Of 10❗\" .**"
// created_at
// :
// "2021-10-10T03:50:09.811Z"
// id
// :
// "616262f133ec2600456a6d65"
// updated_at
// :
// "2021-10-11T01:54:49.251Z"
// url
// :
// "https://w
