'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

function _interopNamespace(e) {
	if (e && e.__esModule) { return e; } else {
		var n = {};
		if (e) {
			Object.keys(e).forEach(function (k) {
				var d = Object.getOwnPropertyDescriptor(e, k);
				Object.defineProperty(n, k, d.get ? d : {
					enumerable: true,
					get: function () {
						return e[k];
					}
				});
			});
		}
		n['default'] = e;
		return n;
	}
}

var crypto = _interopDefault(require('crypto'));
var fs = _interopDefault(require('fs'));
var tty = _interopDefault(require('tty'));
var path = _interopDefault(require('path'));

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var index_cjs = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports,"__esModule",{value:!0});var extendStatics=function(e,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,d){b.__proto__=d;}||function(b,d){for(var e in d)d.hasOwnProperty(e)&&(b[e]=d[e]);};return extendStatics(e,b)};function __extends(e,b){function f(){this.constructor=e;}extendStatics(e,b);e.prototype=null===b?Object.create(b):(f.prototype=b.prototype,new f);}
function __values(e){var b="function"===typeof Symbol&&e[Symbol.iterator],f=0;return b?b.call(e):{next:function(){e&&f>=e.length&&(e=void 0);return {value:e&&e[f++],done:!e}}}}function __read(e,b){var f="function"===typeof Symbol&&e[Symbol.iterator];if(!f)return e;e=f.call(e);var d,u=[];try{for(;(void 0===b||0<b--)&&!(d=e.next()).done;)u.push(d.value);}catch(w){var x={error:w};}finally{try{d&&!d.done&&(f=e["return"])&&f.call(e);}finally{if(x)throw x.error;}}return u}
function __spread(){for(var e=[],b=0;b<arguments.length;b++)e=e.concat(__read(arguments[b]));return e}var globalObj="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof commonjsGlobal?commonjsGlobal:{},BigIntPolyfill="undefined"!==typeof BigInt?BigInt:globalObj.BigInt||Number,exportedDataView=DataView;
exportedDataView.prototype.setBigUint64||(exportedDataView.prototype.setBigUint64=function(e,b,f){if(b<Math.pow(2,32)){var d=b;b=0;}else{d=b.toString(2);b="";for(var u=0;u<64-d.length;u++)b+="0";b+=d;d=parseInt(b.substring(0,32),2);b=parseInt(b.substring(32),2);}this.setUint32(e+(f?0:4),d,f);this.setUint32(e+(f?4:0),b,f);},exportedDataView.prototype.getBigUint64=function(e,b){var f=this.getUint32(e+(b?0:4),b);this.setUint32(e+(b?4:0),b);e=f.toString(2);f=f.toString(2);for(b=0;b<32-e.length;b++);return parseInt(f+
e)});var DataViewPolyfill=exportedDataView,isomorphicBuffer=Buffer,NS_PER_SEC=1E9,getBigIntHrtime=function(e){var b=e();return function(f){f=e(f||b);return f[0]*NS_PER_SEC+f[1]}},isTTY=tty.isatty,bigIntHrtime=getBigIntHrtime(process.hrtime);process.hrtime&&process.hrtime.bigint&&(bigIntHrtime=process.hrtime.bigint);
var bindings={hrtime:bigIntHrtime,exit:process.exit,kill:function(e){process.kill(process.pid,e);},randomFillSync:crypto.randomFillSync,isTTY,fs,path},_a,WASI_ESUCCESS=0,WASI_E2BIG=1,WASI_EACCES=2,WASI_EADDRINUSE=3,WASI_EADDRNOTAVAIL=4,WASI_EAFNOSUPPORT=5,WASI_EAGAIN=6,WASI_EALREADY=7,WASI_EBADF=8,WASI_EBADMSG=9,WASI_EBUSY=10,WASI_ECANCELED=11,WASI_ECHILD=12,WASI_ECONNABORTED=13,WASI_ECONNREFUSED=14,WASI_ECONNRESET=15,WASI_EDEADLK=16,WASI_EDESTADDRREQ=17,WASI_EDOM=18,WASI_EDQUOT=19,WASI_EEXIST=20,
WASI_EFAULT=21,WASI_EFBIG=22,WASI_EHOSTUNREACH=23,WASI_EIDRM=24,WASI_EILSEQ=25,WASI_EINPROGRESS=26,WASI_EINTR=27,WASI_EINVAL=28,WASI_EIO=29,WASI_EISCONN=30,WASI_EISDIR=31,WASI_ELOOP=32,WASI_EMFILE=33,WASI_EMLINK=34,WASI_EMSGSIZE=35,WASI_EMULTIHOP=36,WASI_ENAMETOOLONG=37,WASI_ENETDOWN=38,WASI_ENETRESET=39,WASI_ENETUNREACH=40,WASI_ENFILE=41,WASI_ENOBUFS=42,WASI_ENODEV=43,WASI_ENOENT=44,WASI_ENOEXEC=45,WASI_ENOLCK=46,WASI_ENOLINK=47,WASI_ENOMEM=48,WASI_ENOMSG=49,WASI_ENOPROTOOPT=50,WASI_ENOSPC=51,WASI_ENOSYS=
52,WASI_ENOTCONN=53,WASI_ENOTDIR=54,WASI_ENOTEMPTY=55,WASI_ENOTRECOVERABLE=56,WASI_ENOTSOCK=57,WASI_ENOTTY=59,WASI_ENXIO=60,WASI_EOVERFLOW=61,WASI_EOWNERDEAD=62,WASI_EPERM=63,WASI_EPIPE=64,WASI_EPROTO=65,WASI_EPROTONOSUPPORT=66,WASI_EPROTOTYPE=67,WASI_ERANGE=68,WASI_EROFS=69,WASI_ESPIPE=70,WASI_ESRCH=71,WASI_ESTALE=72,WASI_ETIMEDOUT=73,WASI_ETXTBSY=74,WASI_EXDEV=75,WASI_ENOTCAPABLE=76,WASI_SIGABRT=0,WASI_SIGALRM=1,WASI_SIGBUS=2,WASI_SIGCHLD=3,WASI_SIGCONT=4,WASI_SIGFPE=5,WASI_SIGHUP=6,WASI_SIGILL=
7,WASI_SIGINT=8,WASI_SIGKILL=9,WASI_SIGPIPE=10,WASI_SIGQUIT=11,WASI_SIGSEGV=12,WASI_SIGSTOP=13,WASI_SIGTERM=14,WASI_SIGTRAP=15,WASI_SIGTSTP=16,WASI_SIGTTIN=17,WASI_SIGTTOU=18,WASI_SIGURG=19,WASI_SIGUSR1=20,WASI_SIGUSR2=21,WASI_SIGVTALRM=22,WASI_SIGXCPU=23,WASI_SIGXFSZ=24,WASI_FILETYPE_UNKNOWN=0,WASI_FILETYPE_BLOCK_DEVICE=1,WASI_FILETYPE_CHARACTER_DEVICE=2,WASI_FILETYPE_DIRECTORY=3,WASI_FILETYPE_REGULAR_FILE=4,WASI_FILETYPE_SOCKET_STREAM=6,WASI_FILETYPE_SYMBOLIC_LINK=7,WASI_FDFLAG_APPEND=1,WASI_FDFLAG_DSYNC=
2,WASI_FDFLAG_NONBLOCK=4,WASI_FDFLAG_RSYNC=8,WASI_FDFLAG_SYNC=16,WASI_RIGHT_FD_DATASYNC=BigIntPolyfill(1),WASI_RIGHT_FD_READ=BigIntPolyfill(2),WASI_RIGHT_FD_SEEK=BigIntPolyfill(4),WASI_RIGHT_FD_FDSTAT_SET_FLAGS=BigIntPolyfill(8),WASI_RIGHT_FD_SYNC=BigIntPolyfill(16),WASI_RIGHT_FD_TELL=BigIntPolyfill(32),WASI_RIGHT_FD_WRITE=BigIntPolyfill(64),WASI_RIGHT_FD_ADVISE=BigIntPolyfill(128),WASI_RIGHT_FD_ALLOCATE=BigIntPolyfill(256),WASI_RIGHT_PATH_CREATE_DIRECTORY=BigIntPolyfill(512),WASI_RIGHT_PATH_CREATE_FILE=
BigIntPolyfill(1024),WASI_RIGHT_PATH_LINK_SOURCE=BigIntPolyfill(2048),WASI_RIGHT_PATH_LINK_TARGET=BigIntPolyfill(4096),WASI_RIGHT_PATH_OPEN=BigIntPolyfill(8192),WASI_RIGHT_FD_READDIR=BigIntPolyfill(16384),WASI_RIGHT_PATH_READLINK=BigIntPolyfill(32768),WASI_RIGHT_PATH_RENAME_SOURCE=BigIntPolyfill(65536),WASI_RIGHT_PATH_RENAME_TARGET=BigIntPolyfill(131072),WASI_RIGHT_PATH_FILESTAT_GET=BigIntPolyfill(262144),WASI_RIGHT_PATH_FILESTAT_SET_SIZE=BigIntPolyfill(524288),WASI_RIGHT_PATH_FILESTAT_SET_TIMES=
BigIntPolyfill(1048576),WASI_RIGHT_FD_FILESTAT_GET=BigIntPolyfill(2097152),WASI_RIGHT_FD_FILESTAT_SET_SIZE=BigIntPolyfill(4194304),WASI_RIGHT_FD_FILESTAT_SET_TIMES=BigIntPolyfill(8388608),WASI_RIGHT_PATH_SYMLINK=BigIntPolyfill(16777216),WASI_RIGHT_PATH_REMOVE_DIRECTORY=BigIntPolyfill(33554432),WASI_RIGHT_PATH_UNLINK_FILE=BigIntPolyfill(67108864),WASI_RIGHT_POLL_FD_READWRITE=BigIntPolyfill(134217728),WASI_RIGHT_SOCK_SHUTDOWN=BigIntPolyfill(268435456),RIGHTS_ALL=WASI_RIGHT_FD_DATASYNC|WASI_RIGHT_FD_READ|
WASI_RIGHT_FD_SEEK|WASI_RIGHT_FD_FDSTAT_SET_FLAGS|WASI_RIGHT_FD_SYNC|WASI_RIGHT_FD_TELL|WASI_RIGHT_FD_WRITE|WASI_RIGHT_FD_ADVISE|WASI_RIGHT_FD_ALLOCATE|WASI_RIGHT_PATH_CREATE_DIRECTORY|WASI_RIGHT_PATH_CREATE_FILE|WASI_RIGHT_PATH_LINK_SOURCE|WASI_RIGHT_PATH_LINK_TARGET|WASI_RIGHT_PATH_OPEN|WASI_RIGHT_FD_READDIR|WASI_RIGHT_PATH_READLINK|WASI_RIGHT_PATH_RENAME_SOURCE|WASI_RIGHT_PATH_RENAME_TARGET|WASI_RIGHT_PATH_FILESTAT_GET|WASI_RIGHT_PATH_FILESTAT_SET_SIZE|WASI_RIGHT_PATH_FILESTAT_SET_TIMES|WASI_RIGHT_FD_FILESTAT_GET|
WASI_RIGHT_FD_FILESTAT_SET_TIMES|WASI_RIGHT_FD_FILESTAT_SET_SIZE|WASI_RIGHT_PATH_SYMLINK|WASI_RIGHT_PATH_UNLINK_FILE|WASI_RIGHT_PATH_REMOVE_DIRECTORY|WASI_RIGHT_POLL_FD_READWRITE|WASI_RIGHT_SOCK_SHUTDOWN,RIGHTS_BLOCK_DEVICE_BASE=RIGHTS_ALL,RIGHTS_BLOCK_DEVICE_INHERITING=RIGHTS_ALL,RIGHTS_CHARACTER_DEVICE_BASE=RIGHTS_ALL,RIGHTS_CHARACTER_DEVICE_INHERITING=RIGHTS_ALL,RIGHTS_REGULAR_FILE_BASE=WASI_RIGHT_FD_DATASYNC|WASI_RIGHT_FD_READ|WASI_RIGHT_FD_SEEK|WASI_RIGHT_FD_FDSTAT_SET_FLAGS|WASI_RIGHT_FD_SYNC|
WASI_RIGHT_FD_TELL|WASI_RIGHT_FD_WRITE|WASI_RIGHT_FD_ADVISE|WASI_RIGHT_FD_ALLOCATE|WASI_RIGHT_FD_FILESTAT_GET|WASI_RIGHT_FD_FILESTAT_SET_SIZE|WASI_RIGHT_FD_FILESTAT_SET_TIMES|WASI_RIGHT_POLL_FD_READWRITE,RIGHTS_REGULAR_FILE_INHERITING=BigIntPolyfill(0),RIGHTS_DIRECTORY_BASE=WASI_RIGHT_FD_FDSTAT_SET_FLAGS|WASI_RIGHT_FD_SYNC|WASI_RIGHT_FD_ADVISE|WASI_RIGHT_PATH_CREATE_DIRECTORY|WASI_RIGHT_PATH_CREATE_FILE|WASI_RIGHT_PATH_LINK_SOURCE|WASI_RIGHT_PATH_LINK_TARGET|WASI_RIGHT_PATH_OPEN|WASI_RIGHT_FD_READDIR|
WASI_RIGHT_PATH_READLINK|WASI_RIGHT_PATH_RENAME_SOURCE|WASI_RIGHT_PATH_RENAME_TARGET|WASI_RIGHT_PATH_FILESTAT_GET|WASI_RIGHT_PATH_FILESTAT_SET_SIZE|WASI_RIGHT_PATH_FILESTAT_SET_TIMES|WASI_RIGHT_FD_FILESTAT_GET|WASI_RIGHT_FD_FILESTAT_SET_TIMES|WASI_RIGHT_PATH_SYMLINK|WASI_RIGHT_PATH_UNLINK_FILE|WASI_RIGHT_PATH_REMOVE_DIRECTORY|WASI_RIGHT_POLL_FD_READWRITE,RIGHTS_DIRECTORY_INHERITING=RIGHTS_DIRECTORY_BASE|RIGHTS_REGULAR_FILE_BASE,RIGHTS_SOCKET_BASE=WASI_RIGHT_FD_READ|WASI_RIGHT_FD_FDSTAT_SET_FLAGS|
WASI_RIGHT_FD_WRITE|WASI_RIGHT_FD_FILESTAT_GET|WASI_RIGHT_POLL_FD_READWRITE|WASI_RIGHT_SOCK_SHUTDOWN,RIGHTS_SOCKET_INHERITING=RIGHTS_ALL,RIGHTS_TTY_BASE=WASI_RIGHT_FD_READ|WASI_RIGHT_FD_FDSTAT_SET_FLAGS|WASI_RIGHT_FD_WRITE|WASI_RIGHT_FD_FILESTAT_GET|WASI_RIGHT_POLL_FD_READWRITE,RIGHTS_TTY_INHERITING=BigIntPolyfill(0),WASI_CLOCK_MONOTONIC=0,WASI_CLOCK_PROCESS_CPUTIME_ID=1,WASI_CLOCK_REALTIME=2,WASI_CLOCK_THREAD_CPUTIME_ID=3,WASI_EVENTTYPE_CLOCK=0,WASI_EVENTTYPE_FD_READ=1,WASI_EVENTTYPE_FD_WRITE=2,
WASI_FILESTAT_SET_ATIM_NOW=2,WASI_FILESTAT_SET_MTIM_NOW=8,WASI_O_CREAT=1,WASI_O_DIRECTORY=2,WASI_O_EXCL=4,WASI_O_TRUNC=8,WASI_PREOPENTYPE_DIR=0,WASI_STDIN_FILENO=0,WASI_STDOUT_FILENO=1,WASI_STDERR_FILENO=2,WASI_WHENCE_CUR=0,WASI_WHENCE_END=1,WASI_WHENCE_SET=2,ERROR_MAP={E2BIG:WASI_E2BIG,EACCES:WASI_EACCES,EADDRINUSE:WASI_EADDRINUSE,EADDRNOTAVAIL:WASI_EADDRNOTAVAIL,EAFNOSUPPORT:WASI_EAFNOSUPPORT,EALREADY:WASI_EALREADY,EAGAIN:WASI_EAGAIN,EBADF:WASI_EBADF,EBADMSG:WASI_EBADMSG,EBUSY:WASI_EBUSY,ECANCELED:WASI_ECANCELED,
ECHILD:WASI_ECHILD,ECONNABORTED:WASI_ECONNABORTED,ECONNREFUSED:WASI_ECONNREFUSED,ECONNRESET:WASI_ECONNRESET,EDEADLOCK:WASI_EDEADLK,EDESTADDRREQ:WASI_EDESTADDRREQ,EDOM:WASI_EDOM,EDQUOT:WASI_EDQUOT,EEXIST:WASI_EEXIST,EFAULT:WASI_EFAULT,EFBIG:WASI_EFBIG,EHOSTDOWN:WASI_EHOSTUNREACH,EHOSTUNREACH:WASI_EHOSTUNREACH,EIDRM:WASI_EIDRM,EILSEQ:WASI_EILSEQ,EINPROGRESS:WASI_EINPROGRESS,EINTR:WASI_EINTR,EINVAL:WASI_EINVAL,EIO:WASI_EIO,EISCONN:WASI_EISCONN,EISDIR:WASI_EISDIR,ELOOP:WASI_ELOOP,EMFILE:WASI_EMFILE,EMLINK:WASI_EMLINK,
EMSGSIZE:WASI_EMSGSIZE,EMULTIHOP:WASI_EMULTIHOP,ENAMETOOLONG:WASI_ENAMETOOLONG,ENETDOWN:WASI_ENETDOWN,ENETRESET:WASI_ENETRESET,ENETUNREACH:WASI_ENETUNREACH,ENFILE:WASI_ENFILE,ENOBUFS:WASI_ENOBUFS,ENODEV:WASI_ENODEV,ENOENT:WASI_ENOENT,ENOEXEC:WASI_ENOEXEC,ENOLCK:WASI_ENOLCK,ENOLINK:WASI_ENOLINK,ENOMEM:WASI_ENOMEM,ENOMSG:WASI_ENOMSG,ENOPROTOOPT:WASI_ENOPROTOOPT,ENOSPC:WASI_ENOSPC,ENOSYS:WASI_ENOSYS,ENOTCONN:WASI_ENOTCONN,ENOTDIR:WASI_ENOTDIR,ENOTEMPTY:WASI_ENOTEMPTY,ENOTRECOVERABLE:WASI_ENOTRECOVERABLE,
ENOTSOCK:WASI_ENOTSOCK,ENOTTY:WASI_ENOTTY,ENXIO:WASI_ENXIO,EOVERFLOW:WASI_EOVERFLOW,EOWNERDEAD:WASI_EOWNERDEAD,EPERM:WASI_EPERM,EPIPE:WASI_EPIPE,EPROTO:WASI_EPROTO,EPROTONOSUPPORT:WASI_EPROTONOSUPPORT,EPROTOTYPE:WASI_EPROTOTYPE,ERANGE:WASI_ERANGE,EROFS:WASI_EROFS,ESPIPE:WASI_ESPIPE,ESRCH:WASI_ESRCH,ESTALE:WASI_ESTALE,ETIMEDOUT:WASI_ETIMEDOUT,ETXTBSY:WASI_ETXTBSY,EXDEV:WASI_EXDEV},SIGNAL_MAP=(_a={},_a[WASI_SIGHUP]="SIGHUP",_a[WASI_SIGINT]="SIGINT",_a[WASI_SIGQUIT]="SIGQUIT",_a[WASI_SIGILL]="SIGILL",
_a[WASI_SIGTRAP]="SIGTRAP",_a[WASI_SIGABRT]="SIGABRT",_a[WASI_SIGBUS]="SIGBUS",_a[WASI_SIGFPE]="SIGFPE",_a[WASI_SIGKILL]="SIGKILL",_a[WASI_SIGUSR1]="SIGUSR1",_a[WASI_SIGSEGV]="SIGSEGV",_a[WASI_SIGUSR2]="SIGUSR2",_a[WASI_SIGPIPE]="SIGPIPE",_a[WASI_SIGALRM]="SIGALRM",_a[WASI_SIGTERM]="SIGTERM",_a[WASI_SIGCHLD]="SIGCHLD",_a[WASI_SIGCONT]="SIGCONT",_a[WASI_SIGSTOP]="SIGSTOP",_a[WASI_SIGTSTP]="SIGTSTP",_a[WASI_SIGTTIN]="SIGTTIN",_a[WASI_SIGTTOU]="SIGTTOU",_a[WASI_SIGURG]="SIGURG",_a[WASI_SIGXCPU]="SIGXCPU",
_a[WASI_SIGXFSZ]="SIGXFSZ",_a[WASI_SIGVTALRM]="SIGVTALRM",_a),defaultBindings;defaultBindings=bindings;
var msToNs=function(e){var b=Math.trunc(e);e=BigIntPolyfill(Math.round(1E3*(e-b)));return BigIntPolyfill(b)*BigIntPolyfill(1E3)+e},wrap=function(e){return function(){for(var b=[],f=0;f<arguments.length;f++)b[f]=arguments[f];try{return e.apply(void 0,__spread(b))}catch(d){if("number"===typeof d)return d;if(d&&d.errno)return ERROR_MAP[d.code]||WASI_EINVAL;throw d;}}},stat=function(e,b){var f=e.FD_MAP.get(b);if(!f)throw WASI_EBADF;if(void 0===f.filetype){var d=e.bindings.fs.fstatSync(f.real);e=translateFileAttributes(e,
b,d);b=e.rightsBase;d=e.rightsInheriting;f.filetype=e.filetype;f.rights||(f.rights={base:b,inheriting:d});}return f},translateFileAttributes=function(e,b,f){switch(!0){case f.isBlockDevice():return {filetype:WASI_FILETYPE_BLOCK_DEVICE,rightsBase:RIGHTS_BLOCK_DEVICE_BASE,rightsInheriting:RIGHTS_BLOCK_DEVICE_INHERITING};case f.isCharacterDevice():return f=WASI_FILETYPE_CHARACTER_DEVICE,void 0!==b&&e.bindings.isTTY(b)?{filetype:f,rightsBase:RIGHTS_TTY_BASE,rightsInheriting:RIGHTS_TTY_INHERITING}:{filetype:f,
rightsBase:RIGHTS_CHARACTER_DEVICE_BASE,rightsInheriting:RIGHTS_CHARACTER_DEVICE_INHERITING};case f.isDirectory():return {filetype:WASI_FILETYPE_DIRECTORY,rightsBase:RIGHTS_DIRECTORY_BASE,rightsInheriting:RIGHTS_DIRECTORY_INHERITING};case f.isFIFO():return {filetype:WASI_FILETYPE_SOCKET_STREAM,rightsBase:RIGHTS_SOCKET_BASE,rightsInheriting:RIGHTS_SOCKET_INHERITING};case f.isFile():return {filetype:WASI_FILETYPE_REGULAR_FILE,rightsBase:RIGHTS_REGULAR_FILE_BASE,rightsInheriting:RIGHTS_REGULAR_FILE_INHERITING};
case f.isSocket():return {filetype:WASI_FILETYPE_SOCKET_STREAM,rightsBase:RIGHTS_SOCKET_BASE,rightsInheriting:RIGHTS_SOCKET_INHERITING};case f.isSymbolicLink():return {filetype:WASI_FILETYPE_SYMBOLIC_LINK,rightsBase:BigIntPolyfill(0),rightsInheriting:BigIntPolyfill(0)};default:return {filetype:WASI_FILETYPE_UNKNOWN,rightsBase:BigIntPolyfill(0),rightsInheriting:BigIntPolyfill(0)}}},WASIExitError=function(e){function b(b){var d=e.call(this,"WASI Exit error: "+b)||this;d.code=b;return d}__extends(b,e);
return b}(Error),WASIKillError=function(e){function b(b){var d=e.call(this,"WASI Kill signal: "+b)||this;d.signal=b;return d}__extends(b,e);return b}(Error),WASIDefault=function(){function e(b){var e,d=this,u={};b&&b.preopenDirectories&&(u=b.preopenDirectories);var x={};b&&b.env&&(x=b.env);var w=[];b&&b.args&&(w=b.args);var q=defaultBindings;b&&b.bindings&&(q=b.bindings);this.view=this.memory=void 0;this.bindings=q;this.FD_MAP=new Map([[WASI_STDIN_FILENO,{real:0,filetype:void 0,rights:{base:RIGHTS_REGULAR_FILE_BASE,
inheriting:BigIntPolyfill(0)},path:void 0}],[WASI_STDOUT_FILENO,{real:1,filetype:void 0,rights:{base:RIGHTS_REGULAR_FILE_BASE,inheriting:BigIntPolyfill(0)},path:void 0}],[WASI_STDERR_FILENO,{real:2,filetype:void 0,rights:{base:RIGHTS_REGULAR_FILE_BASE,inheriting:BigIntPolyfill(0)},path:void 0}]]);var g=this.bindings.fs,m=this.bindings.path;try{for(var z=__values(Object.entries(u)),y=z.next();!y.done;y=z.next()){var C=__read(y.value,2),H=C[0],D=C[1],I=g.openSync(D,g.constants.O_RDONLY),J=__spread(this.FD_MAP.keys()).reverse()[0]+
1;this.FD_MAP.set(J,{real:I,filetype:WASI_FILETYPE_DIRECTORY,rights:{base:RIGHTS_DIRECTORY_BASE,inheriting:RIGHTS_DIRECTORY_INHERITING},fakePath:H,path:D});}}catch(a){var E={error:a};}finally{try{y&&!y.done&&(e=z.return)&&e.call(z);}finally{if(E)throw E.error;}}var A=function(a,c){d.refreshMemory();return Array.from({length:c},function(c,b){b=a+8*b;c=d.view.getUint32(b,!0);b=d.view.getUint32(b+4,!0);return new Uint8Array(d.memory.buffer,c,b)})},h=function(a,c){a=stat(d,a);if(c!==BigIntPolyfill(0)&&(a.rights.base&
c)===BigIntPolyfill(0))throw WASI_EPERM;return a},K=q.hrtime(),B=function(a){switch(a){case WASI_CLOCK_MONOTONIC:case WASI_CLOCK_REALTIME:return q.hrtime();case WASI_CLOCK_PROCESS_CPUTIME_ID:case WASI_CLOCK_THREAD_CPUTIME_ID:return q.hrtime()-K;default:return null}};this.wasiImport={args_get:function(a,c){d.refreshMemory();var b=a,e=c;w.forEach(function(a){d.view.setUint32(b,e,!0);b+=4;e+=isomorphicBuffer.from(d.memory.buffer).write(a+"\x00",e);});return WASI_ESUCCESS},args_sizes_get:function(a,c){d.refreshMemory();
d.view.setUint32(a,w.length,!0);a=w.reduce(function(a,c){return a+isomorphicBuffer.byteLength(c)+1},0);d.view.setUint32(c,a,!0);return WASI_ESUCCESS},environ_get:function(a,c){d.refreshMemory();var b=a,e=c;Object.entries(x).forEach(function(a){var c=__read(a,2);a=c[0];c=c[1];d.view.setUint32(b,e,!0);b+=4;e+=isomorphicBuffer.from(d.memory.buffer).write(a+"="+c+"\x00",e);});return WASI_ESUCCESS},environ_sizes_get:function(a,c){d.refreshMemory();var b=Object.entries(x).map(function(a){a=__read(a,2);return a[0]+
"="+a[1]+"\x00"}),e=b.reduce(function(a,c){return a+isomorphicBuffer.byteLength(c)},0);d.view.setUint32(a,b.length,!0);d.view.setUint32(c,e,!0);return WASI_ESUCCESS},clock_res_get:function(a,c){d.view.setBigUint64(c,BigIntPolyfill(0));return WASI_ESUCCESS},clock_time_get:function(a,c,b){d.refreshMemory();a=B(a);if(null===a)return WASI_EINVAL;d.view.setBigUint64(b,BigIntPolyfill(a),!0);return WASI_ESUCCESS},fd_advise:wrap(function(a,c,d,b){h(a,WASI_RIGHT_FD_ADVISE);return WASI_ENOSYS}),fd_allocate:wrap(function(a,
c,d){h(a,WASI_RIGHT_FD_ALLOCATE);return WASI_ENOSYS}),fd_close:wrap(function(a){var c=h(a,BigIntPolyfill(0));g.closeSync(c.real);d.FD_MAP.delete(a);return WASI_ESUCCESS}),fd_datasync:function(a){a=h(a,WASI_RIGHT_FD_DATASYNC);g.fdatasyncSync(a.real);return WASI_ESUCCESS},fd_fdstat_get:wrap(function(a,c){a=h(a,BigIntPolyfill(0));d.refreshMemory();d.view.setUint8(c,a.filetype);d.view.setUint16(c+2,0,!0);d.view.setUint16(c+4,0,!0);d.view.setBigUint64(c+8,BigIntPolyfill(a.rights.base),!0);d.view.setBigUint64(c+
8+8,BigIntPolyfill(a.rights.inheriting),!0);return WASI_ESUCCESS}),fd_fdstat_set_flags:wrap(function(a,c){h(a,WASI_RIGHT_FD_FDSTAT_SET_FLAGS);return WASI_ENOSYS}),fd_fdstat_set_rights:wrap(function(a,c,d){a=h(a,BigIntPolyfill(0));c|=a.rights.base;if(c>a.rights.base)return WASI_EPERM;d|=a.rights.inheriting;if(d>a.rights.inheriting)return WASI_EPERM;a.rights.base=c;a.rights.inheriting=d;return WASI_ESUCCESS}),fd_filestat_get:wrap(function(a,c){a=h(a,WASI_RIGHT_FD_FILESTAT_GET);var b=g.fstatSync(a.real);
d.refreshMemory();d.view.setBigUint64(c,BigIntPolyfill(b.dev),!0);c+=8;d.view.setBigUint64(c,BigIntPolyfill(b.ino),!0);c+=8;d.view.setUint8(c,a.filetype);c+=4;d.view.setUint32(c,Number(b.nlink),!0);c+=4;d.view.setBigUint64(c,BigIntPolyfill(b.size),!0);c+=8;d.view.setBigUint64(c,msToNs(b.atimeMs),!0);c+=8;d.view.setBigUint64(c,msToNs(b.mtimeMs),!0);d.view.setBigUint64(c+8,msToNs(b.ctimeMs),!0);return WASI_ESUCCESS}),fd_filestat_set_size:wrap(function(a,c){a=h(a,WASI_RIGHT_FD_FILESTAT_SET_SIZE);g.ftruncate(a.real,
Number(c));return WASI_ESUCCESS}),fd_filestat_set_times:wrap(function(a,c,d,b){a=h(a,WASI_RIGHT_FD_FILESTAT_SET_TIMES);var e=B(WASI_CLOCK_REALTIME);g.futimesSync(a.real,(b&WASI_FILESTAT_SET_ATIM_NOW)===WASI_FILESTAT_SET_ATIM_NOW?e:c,(b&WASI_FILESTAT_SET_MTIM_NOW)===WASI_FILESTAT_SET_MTIM_NOW?e:d);return WASI_ESUCCESS}),fd_prestat_get:wrap(function(a,c){a=h(a,BigIntPolyfill(0));if(!a.path)return WASI_EINVAL;d.refreshMemory();d.view.setUint8(c,WASI_PREOPENTYPE_DIR);d.view.setUint32(c+4,isomorphicBuffer.byteLength(a.fakePath),
!0);return WASI_ESUCCESS}),fd_prestat_dir_name:wrap(function(a,c,b){a=h(a,BigIntPolyfill(0));if(!a.path)return WASI_EINVAL;d.refreshMemory();isomorphicBuffer.from(d.memory.buffer).write(a.fakePath,c,b,"utf8");return WASI_ESUCCESS}),fd_pwrite:wrap(function(a,c,b,e,f){var n=h(a,WASI_RIGHT_FD_WRITE|WASI_RIGHT_FD_SEEK),k=0;A(c,b).forEach(function(a){for(var c=0;c<a.byteLength;)c+=g.writeSync(n.real,a,c,a.byteLength-c,e+k+c);k+=c;});d.view.setUint32(f,k,!0);return WASI_ESUCCESS}),fd_write:wrap(function(a,
c,b,e){var n=h(a,WASI_RIGHT_FD_WRITE),f=0;A(c,b).forEach(function(a){for(var c=0;c<a.byteLength;)c+=g.writeSync(n.real,a,c,a.byteLength-c);f+=c;});d.view.setUint32(e,f,!0);return WASI_ESUCCESS}),fd_pread:wrap(function(a,c,b,e,f){var n=h(a,WASI_RIGHT_FD_READ|WASI_RIGHT_FD_SEEK),k=0;A(c,b).forEach(function(a){for(var c=0;c<a.byteLength;)c+=g.readSync(n.real,a,c,a.byteLength-c,e+k+c);k+=c;});d.view.setUint32(f,k,!0);return WASI_ESUCCESS}),fd_read:wrap(function(a,c,b,e){var n;a=h(a,WASI_RIGHT_FD_READ);
var f=0===a.real,r=0;try{var v=__values(A(c,b)),l=v.next();a:for(;!l.done;l=v.next()){var t=l.value;for(c=0;c<t.byteLength;){var F=t.byteLength-c,m=g.readSync(a.real,t,c,F,f||void 0===a.offset?null:Number(a.offset));f||(a.offset=(a.offset?a.offset:BigIntPolyfill(0))+BigIntPolyfill(m));c+=m;r+=m;if(0===m||m<F)break a}}}catch(L){var q={error:L};}finally{try{l&&!l.done&&(n=v.return)&&n.call(v);}finally{if(q)throw q.error;}}d.view.setUint32(e,r,!0);return WASI_ESUCCESS}),fd_readdir:wrap(function(a,c,b,
e,f){a=h(a,WASI_RIGHT_FD_READDIR);d.refreshMemory();var n=g.readdirSync(a.path,{withFileTypes:!0}),k=c;for(e=Number(e);e<n.length;e+=1){var r=n[e],l=isomorphicBuffer.byteLength(r.name);if(c+24+l>=k+b)break;d.view.setBigUint64(c,BigIntPolyfill(e+1),!0);c+=8;var t=g.statSync(m.resolve(a.path,r.name));d.view.setBigUint64(c,BigIntPolyfill(t.ino),!0);c+=8;d.view.setUint32(c,l,!0);c+=4;switch(!0){case t.isBlockDevice():l=WASI_FILETYPE_BLOCK_DEVICE;break;case t.isCharacterDevice():l=WASI_FILETYPE_CHARACTER_DEVICE;
break;case t.isDirectory():l=WASI_FILETYPE_DIRECTORY;break;case t.isFIFO():l=WASI_FILETYPE_SOCKET_STREAM;break;case t.isFile():l=WASI_FILETYPE_REGULAR_FILE;break;case t.isSocket():l=WASI_FILETYPE_SOCKET_STREAM;break;case t.isSymbolicLink():l=WASI_FILETYPE_SYMBOLIC_LINK;break;default:l=WASI_FILETYPE_UNKNOWN;}d.view.setUint8(c,l);c+=1;c+=3;isomorphicBuffer.from(d.memory.buffer).write(r.name,c);c+=isomorphicBuffer.byteLength(r.name);}d.view.setUint32(f,c-k,!0);return WASI_ESUCCESS}),fd_renumber:wrap(function(a,
c){h(a,BigIntPolyfill(0));h(c,BigIntPolyfill(0));g.closeSync(d.FD_MAP.get(a).real);d.FD_MAP.set(a,d.FD_MAP.get(c));d.FD_MAP.delete(c);return WASI_ESUCCESS}),fd_seek:wrap(function(a,c,b,e){a=h(a,WASI_RIGHT_FD_SEEK);d.refreshMemory();switch(b){case WASI_WHENCE_CUR:a.offset=(a.offset?a.offset:BigIntPolyfill(0))+BigIntPolyfill(c);break;case WASI_WHENCE_END:b=g.fstatSync(a.real).size;a.offset=BigIntPolyfill(b)+BigIntPolyfill(c);break;case WASI_WHENCE_SET:a.offset=BigIntPolyfill(c);}d.view.setBigUint64(e,
a.offset,!0);return WASI_ESUCCESS}),fd_tell:wrap(function(a,c){h(a,WASI_RIGHT_FD_TELL);d.refreshMemory();throw Error("fd_tell to be implemented (without binding)");}),fd_sync:wrap(function(a){a=h(a,WASI_RIGHT_FD_SYNC);g.fsyncSync(a.real);return WASI_ESUCCESS}),path_create_directory:wrap(function(a,c,b){a=h(a,WASI_RIGHT_PATH_CREATE_DIRECTORY);if(!a.path)return WASI_EINVAL;d.refreshMemory();c=isomorphicBuffer.from(d.memory.buffer,c,b).toString();g.mkdirSync(m.resolve(a.path,c));return WASI_ESUCCESS}),
path_filestat_get:wrap(function(a,c,b,e,f){a=h(a,WASI_RIGHT_PATH_FILESTAT_GET);if(!a.path)return WASI_EINVAL;d.refreshMemory();b=isomorphicBuffer.from(d.memory.buffer,b,e).toString();b=g.statSync(m.resolve(a.path,b));d.view.setBigUint64(f,BigIntPolyfill(b.dev),!0);f+=8;d.view.setBigUint64(f,BigIntPolyfill(b.ino),!0);f+=8;d.view.setUint8(f,translateFileAttributes(d,void 0,b).filetype);f+=4;d.view.setUint32(f,Number(b.nlink),!0);f+=4;d.view.setBigUint64(f,BigIntPolyfill(b.size),!0);f+=8;d.view.setBigUint64(f,
msToNs(b.atimeMs),!0);f+=8;d.view.setBigUint64(f,msToNs(b.mtimeMs),!0);d.view.setBigUint64(f+8,msToNs(b.ctimeMs),!0);return WASI_ESUCCESS}),path_filestat_set_times:wrap(function(a,c,b,e,f,p){a=h(a,WASI_RIGHT_PATH_FILESTAT_SET_TIMES);if(!a.path)return WASI_EINVAL;d.refreshMemory();var n=B(WASI_CLOCK_REALTIME),k=(c&WASI_FILESTAT_SET_ATIM_NOW)===WASI_FILESTAT_SET_ATIM_NOW;c=(c&WASI_FILESTAT_SET_MTIM_NOW)===WASI_FILESTAT_SET_MTIM_NOW;b=isomorphicBuffer.from(d.memory.buffer,b,e).toString();g.utimesSync(m.resolve(a.path,
b),k?n:f,c?n:p);return WASI_ESUCCESS}),path_link:wrap(function(a,c,b,e,f,p,q){a=h(a,WASI_RIGHT_PATH_LINK_SOURCE);f=h(f,WASI_RIGHT_PATH_LINK_TARGET);if(!a.path||!f.path)return WASI_EINVAL;d.refreshMemory();b=isomorphicBuffer.from(d.memory.buffer,b,e).toString();p=isomorphicBuffer.from(d.memory.buffer,p,q).toString();g.linkSync(m.resolve(a.path,b),m.resolve(f.path,p));return WASI_ESUCCESS}),path_open:wrap(function(a,c,b,e,f,p,q,v,l){c=h(a,WASI_RIGHT_PATH_OPEN);p=BigIntPolyfill(p);q=BigIntPolyfill(q);
a=(p&(WASI_RIGHT_FD_READ|WASI_RIGHT_FD_READDIR))!==BigIntPolyfill(0);var n=(p&(WASI_RIGHT_FD_DATASYNC|WASI_RIGHT_FD_WRITE|WASI_RIGHT_FD_ALLOCATE|WASI_RIGHT_FD_FILESTAT_SET_SIZE))!==BigIntPolyfill(0);if(n&&a)var k=g.constants.O_RDWR;else a?k=g.constants.O_RDONLY:n&&(k=g.constants.O_WRONLY);a=p|WASI_RIGHT_PATH_OPEN;p|=q;0!==(f&WASI_O_CREAT)&&(k|=g.constants.O_CREAT,a|=WASI_RIGHT_PATH_CREATE_FILE);0!==(f&WASI_O_DIRECTORY)&&(k|=g.constants.O_DIRECTORY);0!==(f&WASI_O_EXCL)&&(k|=g.constants.O_EXCL);0!==
(f&WASI_O_TRUNC)&&(k|=g.constants.O_TRUNC,a|=WASI_RIGHT_PATH_FILESTAT_SET_SIZE);0!==(v&WASI_FDFLAG_APPEND)&&(k|=g.constants.O_APPEND);0!==(v&WASI_FDFLAG_DSYNC)&&(k=g.constants.O_DSYNC?k|g.constants.O_DSYNC:k|g.constants.O_SYNC,p|=WASI_RIGHT_FD_DATASYNC);0!==(v&WASI_FDFLAG_NONBLOCK)&&(k|=g.constants.O_NONBLOCK);0!==(v&WASI_FDFLAG_RSYNC)&&(k=g.constants.O_RSYNC?k|g.constants.O_RSYNC:k|g.constants.O_SYNC,p|=WASI_RIGHT_FD_SYNC);0!==(v&WASI_FDFLAG_SYNC)&&(k|=g.constants.O_SYNC,p|=WASI_RIGHT_FD_SYNC);n&&
0===(k&(g.constants.O_APPEND|g.constants.O_TRUNC))&&(p|=WASI_RIGHT_FD_SEEK);d.refreshMemory();b=isomorphicBuffer.from(d.memory.buffer,b,e).toString();b=m.resolve(c.path,b);if(m.relative(c.path,b).startsWith(".."))return WASI_ENOTCAPABLE;try{var r=g.realpathSync(b);if(m.relative(c.path,r).startsWith(".."))return WASI_ENOTCAPABLE}catch(G){if("ENOENT"===G.code)r=b;else throw G;}k=g.openSync(r,k);b=__spread(d.FD_MAP.keys()).reverse()[0]+1;d.FD_MAP.set(b,{real:k,filetype:void 0,rights:{base:a,inheriting:p},
path:r});stat(d,b);d.view.setUint32(l,b,!0);return WASI_ESUCCESS}),path_readlink:wrap(function(a,c,b,e,f,p){a=h(a,WASI_RIGHT_PATH_READLINK);if(!a.path)return WASI_EINVAL;d.refreshMemory();c=isomorphicBuffer.from(d.memory.buffer,c,b).toString();c=m.resolve(a.path,c);c=g.readlinkSync(c);e=isomorphicBuffer.from(d.memory.buffer).write(c,e,f);d.view.setUint32(p,e,!0);return WASI_ESUCCESS}),path_remove_directory:wrap(function(a,c,b){a=h(a,WASI_RIGHT_PATH_REMOVE_DIRECTORY);if(!a.path)return WASI_EINVAL;
d.refreshMemory();c=isomorphicBuffer.from(d.memory.buffer,c,b).toString();g.rmdirSync(m.resolve(a.path,c));return WASI_ESUCCESS}),path_rename:wrap(function(a,c,b,e,f,p){a=h(a,WASI_RIGHT_PATH_RENAME_SOURCE);e=h(e,WASI_RIGHT_PATH_RENAME_TARGET);if(!a.path||!e.path)return WASI_EINVAL;d.refreshMemory();c=isomorphicBuffer.from(d.memory.buffer,c,b).toString();f=isomorphicBuffer.from(d.memory.buffer,f,p).toString();g.renameSync(m.resolve(a.path,c),m.resolve(e.path,f));return WASI_ESUCCESS}),path_symlink:wrap(function(a,
c,b,e,f){b=h(b,WASI_RIGHT_PATH_SYMLINK);if(!b.path)return WASI_EINVAL;d.refreshMemory();a=isomorphicBuffer.from(d.memory.buffer,a,c).toString();e=isomorphicBuffer.from(d.memory.buffer,e,f).toString();g.symlinkSync(a,m.resolve(b.path,e));return WASI_ESUCCESS}),path_unlink_file:wrap(function(a,b,e){a=h(a,WASI_RIGHT_PATH_UNLINK_FILE);if(!a.path)return WASI_EINVAL;d.refreshMemory();b=isomorphicBuffer.from(d.memory.buffer,b,e).toString();g.unlinkSync(m.resolve(a.path,b));return WASI_ESUCCESS}),poll_oneoff:function(a,
b,e,f){var c=0,g=0;d.refreshMemory();for(var h=0;h<e;h+=1){var m=d.view.getBigUint64(a,!0);a+=8;var l=d.view.getUint8(a);a+=1;switch(l){case WASI_EVENTTYPE_CLOCK:a+=7;d.view.getBigUint64(a,!0);a+=8;var n=d.view.getUint32(a,!0);a+=4;a+=4;l=d.view.getBigUint64(a,!0);a+=8;d.view.getBigUint64(a,!0);a+=8;var r=d.view.getUint16(a,!0);a+=2;a+=6;var u=1===r;r=WASI_ESUCCESS;n=BigIntPolyfill(B(n));null===n?r=WASI_EINVAL:(l=u?l:n+l,g=l>g?l:g);d.view.setBigUint64(b,m,!0);b+=8;d.view.setUint16(b,r,!0);b+=2;d.view.setUint8(b,
WASI_EVENTTYPE_CLOCK);b+=1;b+=5;c+=1;break;case WASI_EVENTTYPE_FD_READ:case WASI_EVENTTYPE_FD_WRITE:a+=3;d.view.getUint32(a,!0);a+=4;d.view.setBigUint64(b,m,!0);b+=8;d.view.setUint16(b,WASI_ENOSYS,!0);b+=2;d.view.setUint8(b,l);b+=1;b+=5;c+=1;break;default:return WASI_EINVAL}}for(d.view.setUint32(f,c,!0);q.hrtime()<g;);return WASI_ESUCCESS},proc_exit:function(a){q.exit(a);return WASI_ESUCCESS},proc_raise:function(a){if(!(a in SIGNAL_MAP))return WASI_EINVAL;q.kill(SIGNAL_MAP[a]);return WASI_ESUCCESS},
random_get:function(a,b){d.refreshMemory();q.randomFillSync(new Uint8Array(d.memory.buffer),a,b);return WASI_ESUCCESS},sched_yield:function(){return WASI_ENOSYS},sock_recv:function(){return WASI_ENOSYS},sock_send:function(){return WASI_ENOSYS},sock_shutdown:function(){return WASI_ENOSYS}};Object.keys(this.wasiImport).forEach(function(a){var b=d.wasiImport[a];d.wasiImport[a]=function(){for(var a=[],c=0;c<arguments.length;c++)a[c]=arguments[c];try{return b.apply(void 0,__spread(a))}catch(k){switch(console.log("Catched error: "+
k),k.code){default:throw k;case "ENOENT":return WASI_ENOENT}}};});}e.prototype.refreshMemory=function(){this.view&&0!==this.view.buffer.byteLength||(this.view=new DataViewPolyfill(this.memory.buffer));};e.prototype.setMemory=function(b){this.memory=b;};e.prototype.start=function(b){b=b.exports;if(null===b||"object"!==typeof b)throw Error("instance.exports must be an Object. Received "+b+".");var e=b.memory;if(!(e instanceof WebAssembly.Memory))throw Error("instance.exports.memory must be a WebAssembly.Memory. Recceived "+
e+".");this.setMemory(e);b._start&&b._start();};e.defaultBindings=defaultBindings;return e}(),WASI=WASIDefault;exports.WASI=WASI;exports.WASIExitError=WASIExitError;exports.WASIKillError=WASIKillError;exports.default=WASIDefault;
});

var WASI = unwrapExports(index_cjs);
var index_cjs_1 = index_cjs.WASI;
var index_cjs_2 = index_cjs.WASIExitError;
var index_cjs_3 = index_cjs.WASIKillError;

const isNode = !!(
  typeof process !== "undefined" &&
  process.versions &&
  process.versions.node
);

/**
 * ECMAScript Interface to WASM port of OpenSSL (https://www.openssl.org)
 * @module OpenSSL
 * 
 * @license Apache-2.0
 * @copyright 2019 DIGITALARSENAL.IO, INC.
 */

const run = async args => {
  let _filename;
  try {
    _filename = __filename;
  } catch (e) {

  }
  if (isNode && !_filename) {
    const { fileURLToPath } = await new Promise(function (resolve) { resolve(_interopNamespace(require('url'))); }); //SyntaxError: Parenthesized pattern ({fileURLToPath})
    _filename = fileURLToPath((typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('openssl.cjs', document.baseURI).href)));
  }

  let command = ["openssl"].concat(
    args.command.split(/[\s]{1,}/g).filter(Boolean)
  );

  if (!isNode || (isNode && process.env.WORKER)) {
    let { fs, rootDir, env, wasmBinary } = args;
    let wasi = new WASI({
      args: command,
      env: env,
      preopenDirectories: {
        "/": rootDir
      },
      bindings: {
        ...WASI.defaultBindings,
        fs
      }
    });

    let { instance } = await WebAssembly.instantiate(wasmBinary, {
      wasi_unstable: wasi.wasiImport
    });

    try {
      wasi.start(instance);
    } catch (e) { }
  } else {
    const { wasmBinary, ...envArgs } = args;
    const { fork } = await new Promise(function (resolve) { resolve(_interopNamespace(require('child_process'))); });
    let cp = fork(_filename, {
      silent: false,
      env: {
        args: JSON.stringify(envArgs),
        WORKER: true
      }
    });

    cp.on('error', () => {
      console.error('no wasm');
    });

    cp.send({ wasmBinary: wasmBinary });
    return new Promise((resolve, reject) => {
      cp.on("exit", code => {
        resolve(code);
      });
    });
  }
};

if (isNode && process.env.WORKER) {
  const args = JSON.parse(process.env.args);
  process.on("message", async ipc => {
    if (ipc.wasmBinary.type === "Buffer") {
      args.wasmBinary = Buffer.from(ipc.wasmBinary.data);
    } else {
      throw Error(`${new Date().toISOString()} Invalid Wasm Binary Format.`);
    }
    args.fs = await new Promise(function (resolve) { resolve(_interopNamespace(require('fs'))); }); //In Node
    run(args);
  });
}

/**
 * ECMAScript Interface to WASM port of OpenSSL (https://www.openssl.org)
 * @module OpenSSL
 * 
 * @license Apache-2.0
 * @copyright 2019 DIGITALARSENAL.IO, INC.
 */

/* Default path to the WebAssembly file */

  const wasmPath = null; 
  let wasmBinary;
  if(isNode){
    wasmBinary = Buffer.from(wasmb64, 'base64');
  }else{
    let raw = window.atob(wasmb64);
    let rawLength = raw.length;
    let array = new Uint8Array(new ArrayBuffer(rawLength));
    for(let i = 0; i < rawLength; i++) {
      array[i] = raw.charCodeAt(i);
    }
    wasmBinary = array;
  }
  


/** Class representing an OpenSSL session */
class OpenSSL {
  /**
   * Create an OpenSSL instance
   * @param {Object} args
   * @param {Object} fs - The file system object to use
   * @param {string} rootDir - The file system root path to use 
   */
  constructor(args) {
    if (!args) throw Error("Arguments Not Defined");

    if (!args.fs) throw Error("FileSystem Not Defined.");

    if (!args.rootDir) args.rootDir = "/";

    Object.assign(this, { ...args }, { wasmBinaryPath: wasmPath });

    const { readFileSync, mkdirSync, existsSync } = this.fs;

    this.runCommand = async command => {
      if (!existsSync(this.rootDir)) mkdirSync(this.rootDir);

      if (isNode) {
        const { fileURLToPath } = await new Promise(function (resolve) { resolve(_interopNamespace(require('url'))); });
        const { dirname, resolve } = await new Promise(function (resolve) { resolve(_interopNamespace(require('path'))); });
        const _filename = fileURLToPath((typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('openssl.cjs', document.baseURI).href)));
        const _dirname = dirname(_filename);
        
        return run({ command, wasmBinary, ...this });
      } else {
        let response;
        let responseArrayBuffer;
        if (args.wasmBinaryPath) {
          response = await fetch(args.wasmBinaryPath);
        }
        if (response && response.arrayBuffer) {
          responseArrayBuffer = await response.arrayBuffer();
        }
        const wasmBinary = new Uint8Array(responseArrayBuffer);
        if (wasmBinary.length) {
          return run({ command, wasmBinary, ...this });
        }
      }
    };
  }
}

exports.OpenSSL = OpenSSL;