<template>
  <div id='home'>
    <!-- Begin Main Content -->
    <!--Begin Cover Image-->
    <img src='../assets/img/Cover-1920x950.png' class='HometownImage' width='100%' aria-label='Cover Image' />    
    <!--End Cover Image-->
    <!--Begin Heading-->
    <v-layout column align-center>
    <p class='title' aria-label='Company Name'>{{ companyname }}</p>
    <p class='title' aria-label='Company Description'>Newton, Iowa Cab and Taxi Service</p>    
    </v-layout>
    <!--End Heading-->
    <!-- Begin Contact -->    
    <v-card id='contact' raised color='white' height='auto'>
    <v-toolbar dark color='primary'>
      <v-toolbar-title class='title black--text' aria-label='Toolbar Contact'>
        Contact
      </v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <p class='title'>        
        <v-icon>phone</v-icon>
        {{ telnum1 }}<span> </span>
        <v-btn flat icon color='primary' v-on:click='customTextToClipboard1'><v-icon>content_copy</v-icon></v-btn>
      </p>
      <p class='title'>
        <v-icon>phone</v-icon>
        {{ telnum2 }}<span> </span>
        <v-btn flat icon color='primary' v-on:click='customTextToClipboard2'><v-icon>content_copy</v-icon></v-btn>
      </p>
    </v-card-text>
    </v-card>    
    <!-- End Contact -->
    <!-- Begin Hours -->
    <v-card id='hours' raised color='white' height='auto'>
    <v-toolbar dark color='primary' aria-label='Toolbar Hours of Operation'>
      <v-toolbar-title class='title black--text'>
        Hours of Operation
      </v-toolbar-title>
    </v-toolbar>
    <v-card-title class='title'>
      {{ Hours1 }}
    </v-card-title>
    <v-card-title class='subheading'>
      {{ Hours2 }}
    </v-card-title>
      <v-divider></v-divider>
    <v-card-title class='title'>
      {{ Hours3 }}
    </v-card-title>
    <v-card-title class='subheading'>
      {{ Hours4 }}
    </v-card-title>
    <v-divider></v-divider>
    <v-card-title class='subheading Italic'>
      Open 7 Days a Week
    </v-card-title>
    <v-divider></v-divider>
    <v-card-title class='subheading Italic'>
      We take advance reservations for those with Late/Early work schedules.
    </v-card-title>
    </v-card>
    <!-- End Hours -->
    <!-- Begin Pricing -->
    <v-card id='pricing' raised color='white' height='auto'>
    <v-toolbar dark color='primary'>
      <v-toolbar-title class='title black--text' aria-label='Toolbar Pricing'>
        Pricing
      </v-toolbar-title>
    </v-toolbar>
    <v-card-title class='subheading'>
      {{ oneWayPrice }}
    </v-card-title>
    <v-card-title class='subheading'>
      {{ roundTripPrice }}
    </v-card-title>
    <v-card-title class='subheading'>
      {{ additionalStopPrice }}
    </v-card-title>
    <hr>
    <v-card-title class='subheading Italic'>
      *With a wait time of up to 15 minutes. ($3 Additional charge if over 15 minutes.)
    </v-card-title>
    <v-card-title class='subheading'>
      Call dispatch for out of town pricing and availability.
    </v-card-title>
    <v-card-title class='subheading'>
      Keep in mind we offer multiple specials for weekly rates & discount coupons that you can ask your driver about or dispatch.
    </v-card-title>
    <hr>
    <v-card-title class='subheading Italic'>
      So far it's been a great experience & we thank you all for your support & hope you keep us in mind for your hometown cab needs.
    </v-card-title>
    </v-card>
    <!-- End Pricing -->
    <!-- Begin Specials -->
    <v-card id='specials' raised color='white' height='auto'>
    <v-toolbar dark color='primary' aria-label='Toolbar Specials'>
      <v-toolbar-title class='title black--text'>
        Specials
      </v-toolbar-title>
    </v-toolbar>
    <v-card-title class='subheading'>
      We offer discounts for Seniors and Veterans.
    </v-card-title>
    <v-card-title class='subheading'>
      <div>Weekly Discounts and Specials (See our <span>
      <a href='https://www.facebook.com/Hometown-Cab-141349606414372/' target='_blank' rel='noopener' class='HometownLink'>Facebook Page</a>)</span>
      </div>
    </v-card-title>
    </v-card>
    <!-- End Specials -->
    <!-- Begin Testimonials -->
    <v-card id='testimonials' raised color='white' class='HometownTestimonials'>
    <v-toolbar dark color='primary' aria-label='Toolbar Testimonials'>
      <v-toolbar-title class='title black--text'>
        Testimonials
      </v-toolbar-title>
    </v-toolbar>
    <v-card-title class='subheading Italic HometownTestimonials'>
      Kelly Jo Zach
    </v-card-title>
    <v-card-text class='blockquote Italic HometownTestimonialContent HometownTestimonialsSmall'>
    Hometown Cab was my 'go to' cab, as I was searching for a solution to an issue with my license and a car needing lots of mechanical work. I contacted Bradd, and we agreed on an amount that worked for my budget and was fair to all parties involved. Hometown Cab is very good at offering monthly specials. They also cater to the shifts that manufacturers and businesses
                          schedule that may not fit within normal work hours.
    The kindness I receive from Bradd and Chad has been very much appreciated. They always go above and beyond expectations that I had for a cab service. They assist elderly people to door with their groceries, or purchases. They truly
                          care about their riders.
    The cabs are mechanically safe, very recognizable, and most importantly, they offer the BEST customer service. I have overheard Bradd talk to other clients. He educates clients very well on expectations and teaching the courtesies
                          of riding in a cab. He genuinely is concerned if someone may be running late, and he does everything to make sure he is getting the rider to their work, timely, and to their medical appointments timely.
    Chad is quiet and kind. He has a strong professional personality. He cares greatly about the elderly clients, that their every concern is met with a smile and impeccable service.
          This cab service has set the bar very high. Bradd and Chad, not only offer safe transportation but excel in service, cleanliness, and compliance.
    </v-card-text>
    <v-card-text class='blockquote Italic HometownTestimonialContent HometownTestimonials'>
    Hometown Cab was my 'go to' cab, as I was searching for a solution to an issue with my license and a car needing lots of mechanical work. I contacted Bradd, and we agreed on an amount that worked for my budget and was fair to all parties involved. Hometown Cab is very good at offering monthly specials. They also cater to the shifts that manufacturers and businesses
                          schedule that may not fit within normal work hours.
    The kindness I receive from Bradd and Chad has been very much appreciated. They always go above and beyond expectations that I had for a cab service. They assist elderly people to door with their groceries, or purchases. They truly
                          care about their riders.
    The cabs are mechanically safe, very recognizable, and most importantly, they offer the BEST customer service. I have overheard Bradd talk to other clients. He educates clients very well on expectations and teaching the courtesies
                          of riding in a cab. He genuinely is concerned if someone may be running late, and he does everything to make sure he is getting the rider to their work, timely, and to their medical appointments timely.
    Chad is quiet and kind. He has a strong professional personality. He cares greatly about the elderly clients, that their every concern is met with a smile and impeccable service.
          This cab service has set the bar very high. Bradd and Chad, not only offer safe transportation but excel in service, cleanliness, and compliance.
    </v-card-text>
    <v-card-title class='subheading Italic HometownTestimonials'>
      Kudos. HOMETOWN CAB!!!!
    </v-card-title>
    </v-card>
    <!-- End Testimonials -->
    <!-- End Main Content -->
  </div>
</template>

<script>
import Constants from '@/components/constants.js'
export default {
  name: 'home',
  data: function () {
    return {
      companyname: Constants.companyname,
      telnum1: Constants.telnum1,
      telnum2: Constants.telnum2,
      Hours1: Constants.hours[0],
      Hours2: Constants.hours[1],
      Hours3: Constants.hours[2],
      Hours4: Constants.hours[3],
      oneWayPrice: Constants.onewayprice,
      roundTripPrice: Constants.roundtripprice,
      additionalStopPrice: Constants.additionalstopprice
    }
  },
    methods: {      
      customTextToClipboard1: function () {        
        var textArea = document.createElement('textarea')
        textArea.value = Constants.telnum1
        document.body.appendChild(textArea)
        textArea.select()
        try {
          document.execCommand('copy')         
        } catch (err) {
          log.err
        }
        document.body.removeChild(textArea)
      },
      customTextToClipboard2: function (event) {
        var textArea = document.createElement('textarea')        
        textArea.value = Constants.telnum2
        document.body.appendChild(textArea)
        textArea.select()     
        try {
          document.execCommand('copy')          
        } catch (err) {
          log.err
        }
        document.body.removeChild(textArea)
      },
  }
}
</script>
