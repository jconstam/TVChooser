function getShowList( )
{
	var Shows =  [];
	Shows.push( "The Office" );
	Shows.push( "Friends" );
	Shows.push( "Game of Thrones" );
	Shows.push( "Scrubs" );
	Shows.push( "Chronologically Lost" );
	
	return Shows;
}

function getRandomShowName( )
{
	var Shows = getShowList( );
	var numShows = Shows.length;
	
	var index = Math.floor( Math.random( ) * numShows );
	
	return Shows[ index ];
}