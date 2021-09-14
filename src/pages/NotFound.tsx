import { withRouter } from 'react-router';
import { Helmet  } from "react-helmet-async";


const NotFound = () => {
    return(<>
        <Helmet>
            <title>404 Not Found | Better We Pet</title>
        </Helmet>
    </>)
}
export default withRouter(NotFound);