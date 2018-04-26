<template>
  <div id='App'>
    <v-app>
      <v-navigation-drawer app temporary v-model='drawer' aria-label='Navigation Menu'>
        <v-list>        
          <v-list-tile value='true' v-for='(item, i) in items' v-bind:key='i' >
              <v-list-tile-action class='HometownLink'>
                <v-icon v-html='item.icon' v-on:click='$vuetify.goTo(item.target, item.options)' aria-label='Navigation Button' class='HometownLink'></v-icon>
              </v-list-tile-action>
            <v-list-tile-title v-text='item.title' v-on:click='$vuetify.goTo(item.target, item.options)' aria-label='Navigation Title' class='HometownLink'></v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar app color='primary' class='white--text'>
        <v-toolbar-side-icon @click.stop='drawer = !drawer' aria-label='Navigation Button'></v-toolbar-side-icon>
        <v-toolbar-title v-text='title' class='black--text HometownToolbar'></v-toolbar-title>
        <v-spacer></v-spacer>        
      </v-toolbar>
      <v-container>
        <router-view></router-view>
      </v-container>
      <v-footer dark color='primary' class='black--text' height='auto' aria-label='Footer'>
        <v-layout column align-content-center>
          <div class='HometownFooter' aria-label='Company Name'>Hometown Cab</div>        
          <div class='hidden-sm-and-down HometownFooter' aria-label='Owned and Operated by'>Owned and Operated by</div>
          <div class='hidden-sm-and-down HometownFooter' aria-label='Owner'>{{ Owner }}</div>
          <div class='HometownFooter' aria-label='Copyright'>&copy; Copyright 2017 Hometown Cab</div>
          <div class='HometownFooter' aria-label='Version'>Version {{ Version }}</div>
        </v-layout>
      </v-footer>    
    </v-app>
  </div>
</template>

<script>
import Constants from '@/components/constants.js'

export default {
  name: 'App',
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        { icon: 'home', title: 'Home', target: '#home', options: '[ easing: "easeInOutCubic", duration: 300 ]' },
        { icon: 'contact_phone', title: 'Contact', target: '#contact', options: '[ easing: "easeInOutCubic", duration: 300 ]' },
        { icon: 'access_time', title: 'Hours', target: '#hours', options: '[ easing: "easeInOutCubic", duration: 300 ]' },
        { icon: 'attach_money', title: 'Pricing', target: '#pricing', options: '[ easing: "easeInOutCubic", duration: 300 ]' },
        { icon: 'money_off', title: 'Specials', target: '#specials', options: '[ easing: "easeInOutCubic", duration: 300 ]' },
        { icon: 'record_voice_over', title: 'Testimonials', target: '#testimonials', options: '[ easing: "easeInOutCubic", duration: 300 ]' }
      ],
      miniVariant: false,
      right: false,
      rightDrawer: false,
      title: 'Hometown Cab',
      companyname: Constants.companyname,
      telnum1: Constants.telnum1,
      telnum2: Constants.telnum2,
      Hours1: Constants.hours[0],
      Hours2: Constants.hours[1],
      Hours3: Constants.hours[2],
      Hours4: Constants.hours[3],
      oneWayPrice: Constants.onewayprice,
      roundTripPrice: Constants.roundtripprice,
      additionalStopPrice: Constants.additionalstopprice,
      Version: Constants.version,
      Easing: 'easeInOutCubic',
      Duration: 300
    }
  } 
}
</script>

<style>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
@import url('./assets/css/hometown.css');
</style>
