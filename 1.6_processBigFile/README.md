### Task:

    Download and extract the file
    https://drive.google.com/file/d/1ZQZQB5uyl_O3iK2O3GX4f_x0urrvNMJS/view?usp=sharing
    to the source code folder. The file content should be under gitignore.

    Create a script what will try to read the file content to memory.
    Write to readme.md stack trace and what error you had.

#### Usage instruction

    1. navigate into "1.6_processBigFile" directory in your terminal
    2. copy downloaded file there
    3. use command "node index.js"

<--- Last few GCs --->

[13132:000002A34EE77B20] 11768 ms: Scavenge 2052.2 (4118.8) -> 2051.3 (4120.5) MB, 6.4 / 0.0 ms (average mu = 0.996, current mu = 0.997) task;
[13132:000002A34EE77B20] 11786 ms: Scavenge 2053.9 (4121.4) -> 2049.0 (4133.9) MB, 8.9 / 0.0 ms (average mu = 0.996, current mu = 0.997) task;
[13132:000002A34EE77B20] 11899 ms: Mark-sweep 2059.3 (4133.9) -> 2051.7 (4145.0) MB, 97.8 / 0.0 ms (average mu = 0.990, current mu = 0.988) task; scavenge might not succeed

<--- JS stacktrace --->

FATAL ERROR: Reached heap limit Allocation failed - JavaScript heap out of memory
1: 00007FF6CBF29E7F node_api_throw_syntax_error+175967
2: 00007FF6CBEB0C06 SSL_get_quiet_shutdown+65750
3: 00007FF6CBEB1FC2 SSL_get_quiet_shutdown+70802
4: 00007FF6CC94A214 v8::Isolate::ReportExternalAllocationLimitReached+116
5: 00007FF6CC935572 v8::Isolate::Exit+674
6: 00007FF6CC7B73CC v8::internal::EmbedderStackStateScope::ExplicitScopeForTesting+124
7: 00007FF6CC7B45EB v8::internal::Heap::CollectGarbage+3963
8: 00007FF6CC75B205 v8::internal::IndexGenerator::~IndexGenerator+22565
9: 00007FF6CBE43D03 OSSL_STORE_LOADER_get0_description+4835
10: 00007FF6CBE426A6 v8::CTypeInfoBuilder<void>::Build+21014
11: 00007FF6CBF85E8B uv_update_time+491
12: 00007FF6CBF859D2 uv_run+1266
13: 00007FF6CBF580B5 node::SpinEventLoop+325
14: 00007FF6CBE67118 OSSL_STORE_LOADER_get0_description+149240
15: 00007FF6CBEEBE91 node::InitializeOncePerProcess+2897
16: 00007FF6CBEED625 node::Start+821
17: 00007FF6CBCF771C CRYPTO_memcmp+440236
18: 00007FF6CCF1DC28 inflateValidate+18888
19: 00007FF940C27614 BaseThreadInitThunk+20
20: 00007FF9411A26A1 RtlUserThreadStart+33
