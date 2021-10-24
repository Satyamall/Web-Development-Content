def mod(x, y, p) : 
    res = 1     
    x = x % p  
      
    if (x == 0) : 
        return 0
  
    while (y > 0) : 
       
        if ((y & 1) == 1) : 
            res = (res * x) % p 
  
        y = y >> 1      
        x = (x * x) % p 
          
    return res 
    
big_num=10**9+7
t=int(input())
for _ in range(t):
    number,prog=map(int,input().split())
    denominator=mod(1-prog,big_num-2,big_num)
    k=mod(number-1,1,big_num)
    l=mod(prog,1,big_num)
    j=mod(k*l,1,big_num)
    i=1
    g=mod(i+j,1,big_num)
    h=mod(prog,number,big_num)
    f=mod(g*h,1,big_num)
    e=1
    c=mod(e-f,1,big_num)
    a=mod(c*denominator,1,big_num)
    
    r=mod(prog,number+1,big_num)
    q=mod(prog,2,big_num)
    o=mod(q-r,1,big_num)
    m=mod(o*denominator,1,big_num)
    b=mod(m*denominator,1,big_num)

    final=mod(a+b,1,big_num)
    print(final)
