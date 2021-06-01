// Code MovieReviews Here
class MovieReviews extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: []
    };
  }

  componentDidMount() {
    fetch('https://api.nytimes.com/svc/movies/v2/reviews/all.json')
      .then(response => response.json())
      .then(reviewData => this.setState({reviews: reviewData.reviews}))
  }
}