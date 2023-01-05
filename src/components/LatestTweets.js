const LatestTweets = () => {

    return <div id="latest-tweets">
        <h1>
            Latest 3 Tweets:
        </h1>
        <a class="twitter-timeline" href="https://twitter.com/nanahoshinana77" data-tweet-limit="3" data-width="549"
            data-theme="dark"
        // data-theme = "light"
        ></a>
    </div>

};

export default LatestTweets;