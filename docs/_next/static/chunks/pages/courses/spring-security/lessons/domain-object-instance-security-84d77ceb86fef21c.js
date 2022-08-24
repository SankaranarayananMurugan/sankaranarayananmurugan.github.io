(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[407],{4480:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/courses/spring-security/lessons/domain-object-instance-security",function(){return c(7039)}])},476:function(d,b,a){"use strict";var e=a(7568),c=a(4051),f=a.n(c),g=a(5893),h=a(637),i=a(7294),j=a(1896);b.Z=function(a){var l,b=a.fileName,m=a.href,c=a.language,d=void 0===c?"java":c,n=a.children,k=(0,i.useState)(!1),o=k[0],q=k[1],p=(l=(0,e.Z)(f().mark(function a(){return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,navigator.clipboard.writeText(n);case 2:q(!0),setTimeout(function(){return q(!1)},6e3);case 4:case"end":return a.stop()}},a)})),function(){return l.apply(this,arguments)});return(0,g.jsxs)("div",{className:"border rounded fs-6 my-4",children:[b&&(0,g.jsxs)("div",{className:"p-3 bg-light border-bottom",children:[(0,g.jsx)("span",{className:"font-monospace",children:(0,g.jsx)("a",{href:m,target:"_blank",children:b})}),(0,g.jsx)("span",{className:"float-end cursor-pointer","data-bs-toggle":"tooltip","data-bs-title":"Copy code",onClick:p,children:(0,g.jsx)("i",{className:"bi-clipboard"})})]}),(0,g.jsx)("pre",{className:"m-0 px-3 pb-3",children:(0,g.jsx)("code",{className:"language-".concat(d),children:(0,g.jsx)("span",{dangerouslySetInnerHTML:{__html:h.Z.highlight(n,{language:d}).value}})})}),o&&(0,g.jsx)(j.Z,{children:"Code copied to clipboard"})]})}},9963:function(d,b,a){"use strict";a.d(b,{aC:function(){return h},k8:function(){return i},nL:function(){return g}});var e=a(5893),c=a(4046),f=a.n(c);function g(a){var b=a.children;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("h1",{className:"display-5 mt-2 mb-2",children:b}),(0,e.jsx)("p",{className:f().underline})]})}function h(a){var b=a.children;return(0,e.jsx)("h3",{className:"fw-light mt-5 mb-2",children:b})}function i(a){var b=a.children;return(0,e.jsx)("h4",{className:"fw-light mt-5 mb-2",children:b})}},7291:function(d,b,a){"use strict";var e=a(5893),c=a(9472),f=a.n(c);b.Z=function(a){var b=a.children;return(0,e.jsx)("mark",{className:"font-monospace border rounded p-1 ".concat(f().mark),children:b})}},9927:function(b,a){"use strict";a.Z={title:"Spring Security",path:"/courses/spring-security",contextPath:"courses/spring-security/lessons/",githubPath:"https://github.com/SankaranarayananMurugan/spring-security-for-developers/tree/",lessons:[{title:"Introduction",path:"introduction",part:"I. Bootstrap The Application"},{title:"Install Spring Security",path:"install-spring-security",part:"I. Bootstrap The Application"},{title:"Enable Basic Auth",path:"enable-basic-auth",part:"I. Bootstrap The Application"},{title:"Authentication with AppUser",path:"appuser-authentication",part:"I. Bootstrap The Application"},{title:"Password Encoder",path:"password-encoder",part:"I. Bootstrap The Application"},{title:"Permit Public APIs",path:"permit-public-apis",part:"II. Web Layer Security - Role Based Authorization"},{title:"Role Based Authorization",path:"role-based-authorization",part:"II. Web Layer Security - Role Based Authorization"},{title:"Disable CSRF",path:"disable-csrf",part:"II. Web Layer Security - Role Based Authorization"},{title:"Current Authenticated User",path:"current-authenticated-user",part:"II. Web Layer Security - Role Based Authorization"},{title:"Permission Based Authorization",path:"permission-based-authorization",part:"III. Web Layer Security - Permission Based Authorization"},{title:"Define Permissions",path:"define-permissions",part:"III. Web Layer Security - Permission Based Authorization"},{title:"Assign Permissions",path:"assign-permissions",part:"III. Web Layer Security - Permission Based Authorization"},{title:"Remove Role Based Access",path:"remove-role-based-access",part:"III. Web Layer Security - Permission Based Authorization"},{title:"PreAuthorize",path:"pre-authorize",part:"IV. Service Layer Security"},{title:"PostAuthorize",path:"post-authorize",part:"IV. Service Layer Security"},{title:"Authorize Using Spring Beans",path:"authorize-using-spring-beans",part:"IV. Service Layer Security"},{title:"Domain Object Instance Security",path:"domain-object-instance-security",part:"V. Domain Object Instance Security"},{title:"PermissionEvaluator Interface",path:"permission-evaluator-interface",part:"V. Domain Object Instance Security"},{title:"PermissionEvaluator Strategy",path:"permission-evaluator-strategy",part:"V. Domain Object Instance Security"},{title:"DB Backed UserDetailsService",path:"db-backed-userdetailsservice",part:"V. Domain Object Instance Security"},{title:"Basic Authentication Revisited",path:"basic-authentication-revisited",part:"VI. Token Based Authentication"},{title:"Generate Token",path:"generate-token",part:"VI. Token Based Authentication"},{title:"Persist Token",path:"persist-token",part:"VI. Token Based Authentication"},{title:"Verify Token",path:"verify-token",part:"VI. Token Based Authentication"},{title:"Invalidate Token",path:"invalidate-token",part:"VI. Token Based Authentication"},{title:"JSON Web Token",path:"json-web-token",part:"VII. Token Based Authentication and Authorization"},{title:"Generate JWT",path:"generate-jwt",part:"VII. Token Based Authentication and Authorization"},{title:"Verify JWT",path:"verify-jwt",part:"VII. Token Based Authentication and Authorization"}]}},7039:function(f,b,a){"use strict";a.r(b);var g=a(5893),h=a(9963),i=a(130),j=a(7291),k=a(476),c=a(9827),d=a(9927),e=a(358),l=a(2116);b.default=(0,c.default)(function(a){var b=a.githubPath;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("section",{children:[(0,g.jsx)(h.nL,{children:"Domain Object Instance Security"}),(0,g.jsx)(i.Z,{children:"Remember we assigned PLAY_COURSE and UPDATE_COURSE permissions to the STUDENT and INSTRUCTOR roles respectively. It allows any Students to play any course, similarly any Instructors can update any course. But our objective is to"}),(0,g.jsxs)("ol",{children:[(0,g.jsx)("li",{children:"Play only the courses enrolled by the Student."}),(0,g.jsx)("li",{children:"Update only the courses created by the Instructor."})]}),(0,g.jsxs)(i.Z,{children:["In order to achieve this we need to enhance the security of these two service methods in addition to the permissions assigned. Obviously we can implement the authorization checks in ",(0,g.jsx)(j.Z,{children:"ServiceSecurity"})," bean similar to what we did in the previous chapter for ",(0,g.jsx)("u",{children:"ViewProfile"}),":"]}),(0,g.jsx)(k.Z,{children:"\n// PLAY_COURSE permission - Check if the course is enrolled by the authenticated user\npublic boolean isEnrolledStudent(Authentication authentication, Long courseId) {\n    Optional<AppUser> student = appUserRepository.findByUsername(authentication.getName());\n    if (student.isPresent()) {\n        return student.get()\n                .getEnrolledCourses()\n                .stream()\n                .anyMatch(course -> course.getId().equals(courseId));\n    }\n    return false;\n}\n"}),(0,g.jsx)(k.Z,{children:"\n// UPDATE_COURSE permission - Check if the course is created by the authenticated user\npublic boolean isCreatedBy(Authentication authentication, Long courseId) {\n    Optional<Course> course = courseRepository.findById(courseId);\n    if (course.isPresent()) {\n        return course.get()\n              .getCreatedBy()\n              .getUsername()\n              .equalsIgnoreCase(authentication.getName());\n    }\n    return false;\n}\n"})]}),(0,g.jsxs)("section",{children:[(0,g.jsx)(h.aC,{children:"hasPermission() - SpEL Expression"}),(0,g.jsx)(i.Z,{children:"So far we have covered Web Request Security and Service Layer Security, but what we are dealing now is all about securing the domain object instances i.e., Who can do what on a specific Course? And it requires a different approach."}),(0,g.jsxs)(i.Z,{children:["Similar to ",(0,g.jsx)(j.Z,{children:"hasRole()"})," and ",(0,g.jsx)(j.Z,{children:"hasAuthority()"}),", Spring Security offers below built-in SpEL expressions to achieve domain object instance security."]}),(0,g.jsx)(k.Z,{children:"\nhasPermission(Object targetDomainObject, Object permission);\n\nhasPermission(Serializable targetId, String targetType, Object permission);\n"})]}),(0,g.jsxs)("section",{children:[(0,g.jsx)(h.aC,{children:"Update Authority "}),(0,g.jsxs)(i.Z,{children:["Let's replace ",(0,g.jsx)(j.Z,{children:"hasAuthority()"})," with ",(0,g.jsx)(j.Z,{children:"hasPermission()"})," expression for PLAY_COURSE and UPDATE_COURSE constants in ",(0,g.jsx)(j.Z,{children:"Authority"})," class."]}),(0,g.jsx)(k.Z,{fileName:"Authority.java",href:(0,l.gxs)("domain-object-instance-security","permission-evaluator-interface",b)+"/src/main/java/com/facadecode/spring/security/constant/SecurityConstants.java",children:'\npublic class Authority {\n  // Other constants omitted for brevity\n  private static final String PLAY_COURSE = "hasPermission(#courseId, T(com.thecodefacts.spring.security.domain.Course).getSimpleName(), T(com.thecodefacts.spring.security.enums.PermissionEnum).PLAY_COURSE.name())";\n  \n  private static final String UPDATE_COURSE = "hasPermission(#courseId, T(com.thecodefacts.spring.security.domain.Course).getSimpleName(), T(com.thecodefacts.spring.security.enums.PermissionEnum).UPDATE_COURSE.name())";\n}\n'}),(0,g.jsxs)(i.Z,{children:["Here the first parameter ",(0,g.jsx)(j.Z,{children:"#courseId"})," corresponds to the argument with the same name defined in the corresponding service methods. And it represents the unique ",(0,g.jsx)(j.Z,{children:"ID"})," of the Course object. Second parameter represents the type of the target domain object. Third parameter represents the permission required to authorize the service method execution."]}),(0,g.jsxs)(i.Z,{children:["With ",(0,g.jsx)(j.Z,{children:"hasRole()"})," and ",(0,g.jsx)(j.Z,{children:"hasAuthority()"})," expressions, Spring Security automatically verified if the authenticated user has the given role or permission. But with ",(0,g.jsx)(j.Z,{children:"hasPermission()"})," expression, we can ask below two questions:"]}),(0,g.jsxs)("ol",{children:[(0,g.jsx)("li",{children:"Who will implement the authorization check for the hasPermission() SpEL expression?"}),(0,g.jsx)("li",{children:"How do we get the authenticated user details to check for the given permission?"})]})]}),(0,g.jsxs)("section",{children:[(0,g.jsx)(h.aC,{children:"PermissionEvaluator"}),(0,g.jsxs)(i.Z,{children:[(0,g.jsx)(j.Z,{children:"hasPermission()"})," expressions are basically delegated to an instance of ",(0,g.jsx)(j.Z,{children:"PermissionEvaluator"})," interface, which has two methods:"]}),(0,g.jsx)(k.Z,{children:"\nboolean hasPermission(Authentication authentication, Object targetDomainObject, Object permission);\n\nboolean hasPermission(Authentication authentication, Serializable targetId, String targetType, Object permission);\n"}),(0,g.jsxs)(i.Z,{children:["These methods map directly to the ",(0,g.jsx)(j.Z,{children:"hasPermission()"})," SpEL expression with the exception that the first argument ",(0,g.jsx)(j.Z,{children:"Authentication"})," object will be passed automatically by Spring Security."]}),(0,g.jsxs)(i.Z,{children:[(0,g.jsx)(j.Z,{children:"PermissionEvaluator"})," interface is intended to be the bridge between Spring's SpEL expression system and Spring Security's ACL System to implement domain object instance security. But it does not ship with standard Spring Security framework, we need to manually add  ",(0,g.jsx)(j.Z,{children:"spring-security-acl-xxx.jar"})," as mvn dependency in pom.xml."]})]}),(0,g.jsxs)("section",{children:[(0,g.jsx)(h.aC,{children:"What is Spring Security's ACL?"}),(0,g.jsx)(i.Z,{children:"Access Control List (ACL) looks similar to the Security tab you can find in the Windows system in file properties for each file resource. It maintains the list of users and their permissions on the respective file resource."}),(0,g.jsxs)(i.Z,{children:["Similarly Spring Security's ACL system works based on the permissions granted for each user on each domain object instances. This ACL information is stored in the database which will be used exclusively by ",(0,g.jsx)(j.Z,{children:"spring-security-acl-xxx.jar"}),"."]}),(0,g.jsx)(h.k8,{children:"Downside of ACL"}),(0,g.jsx)(i.Z,{children:"Spring Security's ACL is great and easier to write but it does not scale well for some of the following reasons."}),(0,g.jsxs)("ol",{children:[(0,g.jsx)("li",{children:"Assume an application having 1 Million object instances, 1000 users and a minimum of four basic actions (CRUD) = 4 Billion ACL records. Imagine a query executing on these many records for each Service method invocation. This can potentially cause performance issues and can become a maintenance nightmare."}),(0,g.jsxs)("li",{children:["ACL records are normally stored with the ",(0,g.jsx)(j.Z,{children:"ID"})," of the subject and the object together with the permissions in the database table. So ACL systems are basically driven by the identifiers of the subject and the object, not by their attributes. This in itself have few practical issues listed below:"]})]}),(0,g.jsxs)("ol",{type:"a",className:"ms-5",children:[(0,g.jsx)("li",{children:"We can't understand from the ACL table who can do what on which domain object instances."}),(0,g.jsx)("li",{children:"It is also nearly impossible to understand the rules driving the granted permissions."}),(0,g.jsx)("li",{children:"Any change in the attributes of the subject or object requires constant updation of these ACL records."}),(0,g.jsx)("li",{children:"Any change in the requirement change in terms of granted permissions require a huge insert/update/deletion of these ACL records corresponding to the impacted subject associated with the object under authorization."})]})]}),(0,g.jsxs)("section",{children:[(0,g.jsx)(h.aC,{children:"Attribute-based Access Control (ABAC)"}),(0,g.jsx)(i.Z,{children:"The drawbacks of ACL can be overcome by Attribute-based access control (ABAC) or Policy-based access control (PBAC). ABAC is different and a recently popular authorization mechanism to secure the domain object instances."}),(0,g.jsx)(i.Z,{children:"XACML is a specification to define and evaluate such attribute-based access control policies. But we are not going to cover XACML here, we will then be deviating from Spring Security. If all your access control needs can be implemented by simple patterns and conditions within the context of your domain model, specifications like XACML will be an overkill for small and medium-sized applications."}),(0,g.jsxs)(i.Z,{children:["Let's see how we are going to implement ABAC with Spring Security's ",(0,g.jsx)(j.Z,{children:"PermissionEvaluator"})," interface in the coming chapters."]})]})]})},(0,e.s)(d.Z,"domain-object-instance-security"))},4046:function(a){a.exports={heading:"Heading_heading__aP_DN",underline:"Heading_underline__sSwtx"}},9472:function(a){a.exports={mark:"Mark_mark__8gh_T"}}},function(a){a.O(0,[116,734,92,637,827,774,888,179],function(){var b;return a(a.s=4480)}),_N_E=a.O()}])