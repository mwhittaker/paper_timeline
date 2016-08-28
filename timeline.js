// paper: {
//   title: string,
//   link: string,
//   thumbnail: string,
//   date: Date,
//   genre: string
// }

function paper_to_html(paper) {
  return '<p class="paper-paragraph">' +
         '  <a href="' + paper.link + '">' + paper.title + '</a>' +
         '</p>' +
         '<a href="' + paper.link + '">' +
         '  <img class= "paper-thumb" src="' + paper.thumbnail + '">' +
         '</a>';
}

function load_papers(genres, papers) {
  var container = document.getElementById('visualization');

  var items = [];
  for (i = 0; i < papers.length; i++) {
    items.push({
      id: i,
      content: paper_to_html(papers[i]),
      start: papers[i].date,
      title: papers[i].title,
      group: papers[i].genre
    });
  }

  var groups = [];
  for (i = 0; i < genres.length; i++) {
    groups.push({
      id: genres[i],
      content: genres[i]
    });
  }

  var options = {
    selectable: false
  };

  var timeline = new vis.Timeline(container, new vis.DataSet(items),
                                  new vis.DataSet(groups), options);
}

function main() {
  var consensus_algorithms = "Consensus Algorithms";
  var isolation_levels = "Isolation Levels";

  genres = [
    consensus_algorithms,
    isolation_levels,
  ];

  papers = [
    // Consensus Algorithms
    {
      title: "The Part-Time Parliament",
      link: "https://goo.gl/XH9pTz",
      thumbnail: "thumbnails/part_time_parliament.svg",
      date: new Date(1998, 5, 2),
      genre: consensus_algorithms
    },
    {
      title: "Paxos Made Simple",
      link: "https://goo.gl/mS99g7",
      thumbnail: "thumbnails/paxos_made_simple.svg",
      date: new Date(2001, 11, 1),
      genre: consensus_algorithms
    },
    {
      title: "In Search of an Understandable Consensus Algorithm",
      link: "https://goo.gl/2jyuR6",
      thumbnail: "thumbnails/raft.svg",
      date: new Date(2014, 6, 19),
      genre: consensus_algorithms
    },

    // Isolation Levels
    {
      title: "Generalized Isolation Level Definitions",
      link: "https://goo.gl/Z451LY",
      thumbnail: "thumbnails/generalized_isolation.svg",
      date: new Date(2000, 3, 3),
      genre: isolation_levels
    },

  ];

  load_papers(genres, papers);
}

main();
