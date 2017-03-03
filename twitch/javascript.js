


function getChannels(channel) {
  
  var channels = ["freecodecamp", "RobotCaleb", "Lifecoach1981","Arteezy", "noobs2ninjas", "TR7K", "ESL_SC2", "brunofin" ];
  
  
 
  
 $.each(channels, function(j){
    
    var streamers = channels[j];
    $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/' + streamers + '?client_id=oi8xd6lsgcju2fv47i9iyanqedo4eeu&callback=?', function(datastatus) {
     
      if(datastatus.stream == null){
        
       
        $.getJSON('https://wind-bow.gomix.me/twitch-api/channels/' + streamers + '?client_id=oi8xd6lsgcju2fv47i9iyanqedo4eeu&callback=?', function(data) {
          
          
          if(data.status == 404){
            $(".error").append("<div class='error ChannelName'><img src='http://fivera.net/wp-content/uploads/2014/03/error_z0my4n.png'/>  <h3>"+data.message+"</h3></div>");
            
          } else {
          
          $('.offline').append("<div class='ChannelName'><a  target='_blank' href='"+data.url+"'><img class='channelLogo' src=" + data.logo +"></a> <span class='displayName'><a target='_blank' href='"+data.url+"'><h3>"+data.display_name+"</span></a>  : <span class='offlineFont'>offline</h3></span><h3 class='channelStatus'>"+data.status+"</h3></div>");
          
          
           console.log(data);
          }
      
  
        });//end of channels Json call
        
      } else {
        $.getJSON('https://wind-bow.gomix.me/twitch-api/channels/' + streamers + '?client_id=oi8xd6lsgcju2fv47i9iyanqedo4eeu&callback=?', function(online) {
        
        
        $('.online').append("<div class='ChannelName'><a target='_blank' href='"+online.url+"'><img class='channelLogo' src=" + online.logo +"></a> <span class='displayName'><a target='_blank' href='"+online.url+"'><h3>"+online.display_name+"</span></a>  : <span class='onlineFont'>Online</h3></span><h3 class='channelStatus'>"+online.status+"</h3></div>");
        });
        
      } //end of check for online streamers
     
        
     
      
    });//end of streams json call
    
    
  });//end of for loop 
  
  


        }

getChannels();