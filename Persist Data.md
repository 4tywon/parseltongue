* `impressions`: number of times it's been translated on a page
* `progress` is number of correct
* Each level will have an increasing number that the user needs to have correct in order to advance to the next level

``` json
{
	language: "fr",
	level: 2,
	progress: 50,
	words: [
		{ "word": "Hello", "impressions": 10, "correct": 3, "incorrect": 2},
		...
	]
}
```
