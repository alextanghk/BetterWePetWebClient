import React from 'react';
import { withRouter } from 'react-router';
import { Helmet  } from "react-helmet-async";
import { useParams, RouteComponentProps } from 'react-router-dom';
import firebase from '../firebase';
import { useDocument } from 'react-firebase-hooks/firestore';

interface PageParam {
    id: string
}
type PageProps = RouteComponentProps<PageParam>;

const ClinicsDetailPage:React.FC<PageProps> = () => {
    const params = useParams<PageParam>();
    const [value, loading, error] = useDocument(
        firebase.firestore().doc(`clinics/${params.id}`),
        {
          snapshotListenOptions: { includeMetadataChanges: true },
        }
      );
    return(<>
        <Helmet>
            <title>Better We Pet</title>
        </Helmet>
        <p>
            {error && <strong>Error: {JSON.stringify(error)}</strong>}
            {loading && <span>Document: Loading...</span>}
            {value && <span>Document: {JSON.stringify(value.data())}</span>}
        </p>
    </>)
}
export default withRouter(ClinicsDetailPage);