import React from 'react';
import styles from './Content.module.scss';

const Content = () => (
  <div className={`container ${styles.contentContainer}`}>
    <div className="row">
      <div className="col-md-7">
        <h2 className={styles.featuretteHeading}>
          Featurette Heading Text 1
        </h2>
        <p className="lead">
          Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.
        </p>
      </div>
      <div className="col-md-5">
        <img className="featurette-image img-fluid mx-auto" src="https://via.placeholder.com/500" alt="Generic placeholder image" />
      </div>
    </div>

    <hr className={styles.featuretteDivider} />

    <div className="row">
      <div className="col-md-7 order-md-2">
        <h2 className={styles.featuretteHeading}>
          Featurette Heading Text 2
        </h2>
        <p className="lead">
          Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.
        </p>
      </div>
      <div className="col-md-5 order-md-1">
        <img className="featurette-image img-fluid mx-auto" src="https://via.placeholder.com/500" alt="Generic placeholder image" />
      </div>
    </div>

    <hr className={styles.featuretteDivider} />

    <div className="row">
      <div className="col-md-7">
        <h2 className={styles.featuretteHeading}>
          Featurette Heading Text 3
        </h2>
        <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
      </div>
      <div className="col-md-5">
        <img className="featurette-image img-fluid mx-auto" src="https://via.placeholder.com/500" alt="Generic placeholder image" />
      </div>
    </div>

    <hr className={styles.featuretteDivider} />
  </div>
)

export default Content;