(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[559],{6919:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/courses/spring-security/lessons/db-backed-userdetailsservice",function(){return c(2508)}])},6614:function(d,b,a){"use strict";var e=a(5893),c=a(3394),f=a.n(c);b.Z=function(a){var b=a.title,c=a.children;return(0,e.jsxs)("section",{className:"px-3 pt-1 my-5 ".concat(f().notes),children:[(0,e.jsxs)("h4",{className:"mb-3",children:[(0,e.jsx)("i",{className:"bi bi-info-circle me-2"}),void 0===b?"Note":b]}),c]})}},2508:function(f,b,a){"use strict";a.r(b);var g=a(5893),h=a(9963),i=a(130),j=a(7291),k=a(476),c=a(9827),d=a(9927),e=a(358),l=a(6614);b.default=(0,c.default)(function(a){var b=a.githubPath;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("section",{children:[(0,g.jsx)(h.nL,{children:"Database Backed UserDetailsService"}),(0,g.jsxs)(i.Z,{children:["Remember we are using ",(0,g.jsx)(j.Z,{children:"InMemoryUserDetailsManager"}),", the default non-persistant implementation of ",(0,g.jsx)(j.Z,{children:"UserDetailsService"})," provided by Spring Security. It is mainly intended for testing and demonstration purposes. Any change in the user details in the database requires us to restart the application. We need an implementation backed by database for production."]})]}),(0,g.jsxs)("section",{children:[(0,g.jsx)(h.aC,{children:"UserDetailsService"}),(0,g.jsxs)(i.Z,{children:[(0,g.jsx)(j.Z,{children:"UserDetailsService"})," is used by ",(0,g.jsx)("a",{href:"https://docs.spring.io/spring-security/reference/servlet/authentication/passwords/dao-authentication-provider.html#servlet-authentication-daoauthenticationprovider",target:"_blank",children:"DaoAuthenticationProvider"})," for retrieving a username, password, and other attributes for authenticating with a username and password. We can define custom authentication by exposing a custom ",(0,g.jsx)(j.Z,{children:"UserDetailsService"})," as a bean."]}),(0,g.jsxs)(i.Z,{children:["Let's implement it using our ",(0,g.jsx)(j.Z,{children:"DbUserDetailsService"})," bean by overriding the ",(0,g.jsx)(j.Z,{children:"loadUserByUsername()"})," method."]}),(0,g.jsx)(k.Z,{fileName:"DbUserDetailsService.java",href:b+"/src/main/java/com/facadecode/spring/security/service/DbUserDetailsService.java",children:'\n@Service\npublic class DbUserDetailsService implements UserDetailsService {\n    // Other details omitted for brevity\n\n    @Override\n    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {\n        AppUser appUser = appUserRepository.findByUsername(username)\n                .orElseThrow(() -> new UsernameNotFoundException(String.format("User %s not found", username)));\n\n        return User.builder()\n                .username(appUser.getUsername())\n                .password(appUser.getPassword())\n                .authorities(this.getPermissions(appUser.getRoles()))\n                .build();\n    }\n}\n'}),(0,g.jsxs)(i.Z,{children:["Here we are using ",(0,g.jsx)(j.Z,{children:"AppUserRepository"})," to find the user by ",(0,g.jsx)("em",{children:"username"})," from the database. And then we are returning the ",(0,g.jsx)(j.Z,{children:"UserDetails"})," object mapped from the ",(0,g.jsx)(j.Z,{children:"AppUser"})," object."]}),(0,g.jsxs)(i.Z,{children:["Once we remove the ",(0,g.jsx)(j.Z,{children:"InMemoryUserDetailsManager"})," bean from ",(0,g.jsx)(j.Z,{children:"SecurityBean"})," configuration, ",(0,g.jsx)(j.Z,{children:"DaoAuthenticationProvider"})," will automatically use the ",(0,g.jsx)(j.Z,{children:"DbUserDetailsService"})," component to load the user by ",(0,g.jsx)("em",{children:"username"})," for authentication. And we can also remove the existing ",(0,g.jsx)(j.Z,{children:"loadAllUserDetails()"})," method as it is no longer required."]}),(0,g.jsx)(l.Z,{children:(0,g.jsxs)(i.Z,{children:["Please note there is no change in the security restrictions we have applied so far as we have just swapped the ",(0,g.jsx)(j.Z,{children:"UserDetailsService"})," implementation from non-persistant datastore to persistant datastore."]})})]})]})},(0,e.s)(d.Z,"db-backed-userdetailsservice"))},3394:function(a){a.exports={notes:"Notes_notes__up3CK"}}},function(a){a.O(0,[116,891,637,462,774,888,179],function(){var b;return a(a.s=6919)}),_N_E=a.O()}])