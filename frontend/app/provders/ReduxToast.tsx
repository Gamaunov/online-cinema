import { FC } from 'react'
import ReduxToastrLib from 'react-redux-toastr'

const ReduxToast: FC = () => {
	return (
		<ReduxToastrLib
			newestOnTop={false}
			preventDuplicates
			progressBar
			timeOut={3000}
			transitionIn="fadeIn"
			transitionOut="fadeOut"
		/>
	)
}

export default ReduxToast