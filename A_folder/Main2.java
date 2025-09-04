abstract class animal{
    public abstract void makesound();

    public void sleep(){
     System.out.println("Animal Sleep");
    }
}

class dog extends animal{
    public void makesound(){
    System.out.println("Dog barks");
    }
}

class cat extends animal{
    public void makesound(){
    System.out.println("Cat meow");
    }
}

public class Main2 {
    public static void main(String args[]){
        Animal D=new dog();
        Animal C=new cat();

        D.makenoise();
        C.makenoise();
    }
}
