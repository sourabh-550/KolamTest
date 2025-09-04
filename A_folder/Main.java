interface Playable{
    void play();
}

class football implements Playable{
    public void play(){
        System.out.println("Playing football on field");
    }
}

class Music implements Playable{
    public void play(){
        System.out.println("Playing music");
    }
    
}

public class Main {
    public static void main(String args[]){
    Playable p1= new football(); 
    Playable p2 =new Music();

    p1.play();
    p2.play();
    }
    
}
