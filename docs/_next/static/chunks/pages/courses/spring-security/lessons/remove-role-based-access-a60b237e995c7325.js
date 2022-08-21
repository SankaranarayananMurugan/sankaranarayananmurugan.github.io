(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[510],{8656:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/courses/spring-security/lessons/remove-role-based-access",function(){return c(4559)}])},3968:function(d,b,a){"use strict";var e=a(5893),c=a(3394),f=a.n(c);b.Z=function(a){var b=a.title,c=a.children;return(0,e.jsxs)("section",{className:"px-3 pt-1 my-5 ".concat(f().notes),children:[(0,e.jsxs)("h4",{className:"mb-3",children:[(0,e.jsx)("i",{className:"bi bi-info-circle me-2"}),void 0===b?"Note":b]}),c]})}},4559:function(f,b,a){"use strict";a.r(b);var g=a(5893),h=a(9963),i=a(130),j=a(7291),k=a(476),c=a(9827),d=a(9927),e=a(358),l=a(3968);b.default=(0,c.default)(function(b){var a=b.githubPath;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("section",{children:[(0,g.jsx)(h.nL,{children:"Remove Role-Based Access"}),(0,g.jsx)(i.Z,{children:"We have intentionally left the role-based access restrictions to few APIs in order to show you how to combine roles and permissions together. But going forward we will replace it completely with permission-based access control."}),(0,g.jsxs)(i.Z,{children:["Let's modify ",(0,g.jsx)(j.Z,{children:"HttpSecurity"})," configuration by replacing ",(0,g.jsx)(j.Z,{children:"hasRole()"})," with ",(0,g.jsx)(j.Z,{children:"hasAuthority()"})," for each API using the appropriate permissions we have created in ",(0,g.jsx)(j.Z,{children:"PermissionEnum"}),"."]}),(0,g.jsx)(k.Z,{fileName:"ApiSecurityConfig.java",href:a+"/src/main/java/com/facadecode/spring/security/config/ApiSecurityConfig.java",children:"\n@Bean\npublic SecurityFilterChain apiFilterChain(HttpSecurity http) throws Exception {\n    http\n        .csrf().disable()\n        .authorizeRequests(auth -> auth\n                .antMatchers(GET, PUBLIC_API_LIST).permitAll()\n                .antMatchers(API_LIST_STUDENTS).hasAuthority(LIST_STUDENTS.name())\n                .antMatchers(API_LIST_INSTRUCTORS).hasAuthority(LIST_INSTRUCTORS.name())\n                .antMatchers(API_VIEW_PROFILE).hasAuthority(VIEW_PROFILE.name())\n                .antMatchers(POST, API_CREATE_COURSES).hasAuthority(CREATE_COURSE.name())\n                .antMatchers(PUT, API_UPDATE_COURSES).hasAuthority(UPDATE_COURSE.name())\n                .antMatchers(API_PLAY_COURSE).hasAuthority(PLAY_COURSE.name())\n                .anyRequest().authenticated()\n        )\n        .httpBasic();\n    return http.build();\n}\n"})]}),(0,g.jsxs)("section",{children:[(0,g.jsx)(h.aC,{children:"Remove roles from Authorities"}),(0,g.jsxs)(i.Z,{children:["With only ",(0,g.jsx)(j.Z,{children:"hasAuthority()"})," used to secure each REST API we no longer need to provide the roles assigned to each user. So we can directly map ",(0,g.jsx)(j.Z,{children:"getPermissions()"})," in ",(0,g.jsx)(j.Z,{children:"authorities()"})," and remove ",(0,g.jsx)(j.Z,{children:"getRoles()"})," and ",(0,g.jsx)(j.Z,{children:"getRolesAndPermissions()"})," altogether in ",(0,g.jsx)(j.Z,{children:"DbUserDetailService"}),"."]}),(0,g.jsx)(k.Z,{fileName:"DbUserDetailService.java",href:a+"/src/main/java/com/facadecode/spring/security/service/DbUserDetailsService.java",children:"\npublic List<UserDetails> getAllUserDetails() {\n    return appUserRepository.findAll()\n        .stream()\n        .map(appUser -> User.builder()\n                .username(appUser.getUsername())\n                .password(appUser.getPassword())\n                .authorities(this.getPermissions(appUser.getRoles()))\n                .build()\n        )\n        .collect(Collectors.toList());\n}\n\nprivate String[] getPermissions(Set<AppRole> roles) {\n    return roles.stream()\n        .flatMap(role -> role.getPermissions().stream())\n        .map(permission -> permission.getName().name())\n        .collect(Collectors.toSet())\n        .toArray(new String[0]);\n} \n"}),(0,g.jsx)(i.Z,{children:"This got even more simplified where we no longer required to combine roles (by prefixing it with ROLE_) and permissions. And we no longer need to care about the authorities override issues we highlighted in Chapter 7."}),(0,g.jsx)(i.Z,{children:"Finally we will have each APIs secured against its own permission, and users with only the permissions corresponding to the APIs they can access as their authorities as mentioned in the below table."}),(0,g.jsxs)("table",{className:"table table-striped mb-4",children:[(0,g.jsx)("thead",{children:(0,g.jsxs)("tr",{children:[(0,g.jsx)("th",{children:"User"}),(0,g.jsx)("th",{children:"Authorities"})]})}),(0,g.jsxs)("tbody",{children:[(0,g.jsxs)("tr",{children:[(0,g.jsx)("td",{children:"Bob, Kevin, Stuart"}),(0,g.jsx)("td",{children:"PLAY_COURSE, VIEW_PROFILE"})]}),(0,g.jsxs)("tr",{children:[(0,g.jsx)("td",{children:"Gru, Lucy"}),(0,g.jsx)("td",{children:"CREATE_COURSE, UPDATE_COURSE, PLAY_COURSE, VIEW_PROFILE"})]}),(0,g.jsxs)("tr",{children:[(0,g.jsx)("td",{children:"Admin"}),(0,g.jsx)("td",{children:"LIST_STUDENTS, LIST_INSTRUCTORS, VIEW_PROFILE"})]})]})]})]}),(0,g.jsx)(l.Z,{children:(0,g.jsxs)("ol",{children:[(0,g.jsx)("li",{children:"There will be no change in the API access behaviour after replacing the Role-based API access with Permission-based API access."}),(0,g.jsx)("li",{children:"In addition to Play Course, we have secured Update Course as well as View Profile APIs with its own permissions, but still these three APIs have not met the Security Objectives defined in Chapter 1"})]})})]})},(0,e.s)(d.Z,"remove-role-based-access"))},3394:function(a){a.exports={notes:"Notes_notes__up3CK"}}},function(a){a.O(0,[116,891,637,462,774,888,179],function(){var b;return a(a.s=8656)}),_N_E=a.O()}])