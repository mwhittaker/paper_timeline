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
         '  <img class="paper-thumb" src="' + paper.thumbnail + '">' +
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

  // Item heights are computed before images have a chance to load. Here, we
  // implement a hack and resize things after 2 seconds which is hopefully
  // enough time for the images to load.
  setTimeout(function() { timeline.redraw(); }, 2000);
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
      title: "Zab: High-performance broadcast for primary-backup systems",
      link: "https://goo.gl/G52EGK",
      thumbnail: "thumbnails/zab.svg",
      date: new Date(2011, 6, 27),
      genre: consensus_algorithms
    },
    {
      title: "Viewstamped Replication Revisted",
      link: "https://goo.gl/GKFCXO",
      thumbnail: "thumbnails/viewstamped_revisited.svg",
      date: new Date(2012, 7, 23),
      genre: consensus_algorithms
    },
    {
      title: "In Search of an Understandable Consensus Algorithm",
      link: "https://goo.gl/2jyuR6",
      thumbnail: "thumbnails/raft.svg",
      date: new Date(2014, 6, 19),
      genre: consensus_algorithms
    },
    {
      title: "Vive La Difference: Paxos vs. Viewstamped Replication vs. Zab",
      link: "https://goo.gl/1LKNkM",
      thumbnail: "thumbnails/vive_la_difference.svg",
      date: new Date(2014, 9, 8),
      genre: consensus_algorithms
    },

    // Isolation Levels
    {
      title: "Linearizability: A Correctness Condition for Concurrent Objects",
      link: "https://goo.gl/b3RQbH",
      thumbnail: "thumbnails/linearizability.svg",
      date: new Date(1990, 7, 3),
      genre: isolation_levels
    },
    {
      title: "A Critique of ANSI SQL Isolation Levels",
      link: "https://goo.gl/zIYWZM",
      thumbnail: "thumbnails/A_Critique_of_ANSI_SQL_IsolationL_evels.svg",
      date: new Date(1995, 5),
      genre: isolation_levels
    },
    {
      title: "Generalized Isolation Level Definitions",
      link: "https://goo.gl/Z451LY",
      thumbnail: "thumbnails/generalized_isolation.svg",
      date: new Date(2000, 3, 3),
      genre: isolation_levels
    },
    {
      title: "Highly Available Transactions: Virtues and Limitations",
      link: "https://goo.gl/xWRdyj",
      thumbnail: "thumbnails/HAT_virtues_and_limitations.svg",
      date: new Date(2013, 11),
      genre: isolation_levels
    },
  ];

  load_papers(genres, papers);
}
