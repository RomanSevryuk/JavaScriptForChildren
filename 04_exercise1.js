let scores = {
    "alex 120": 0,
    jack: 1,
    katy: 2
};
let addScores = 0;
while (addScores < 10 )
{
scores["alex"] += 2;
scores["jack"] += 2;
scores["katy"] += 2;
addScores ++;
}
scores["alex 120"] += 100;
console.log(scores)