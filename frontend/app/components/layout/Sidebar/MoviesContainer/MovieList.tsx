import { FC } from 'react'

import MovieItem from './MovieItem'
import s from './MovieList.module.scss'
import { IMovieList } from './movie-list.interface'
import Link from 'next/link'

const MovieList: FC<IMovieList> = ({ link, movies, title }) => {
	return (
		<div className={s.list}>
			<div className={s.heading}>{title}</div>
			{movies.map((movie) => (
				<MovieItem key={movie._id} movie={movie}/>
			))}
      <Link href={link}>
        <div className={s.button}>
          See more
        </div>
      </Link>
		</div>
	)
}

export default MovieList
