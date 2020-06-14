import javax.swing.*;
import javax.swing.border.EmptyBorder;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.ArrayList;
import java.util.Random;

public class runner {
    public static boolean chooseRandom = false;

    private JFrame frame;

    private JPanel controls;
    private JLabel title;
    private JButton play;
    private JButton pause;
    private JButton random;

    public runner() {
        frame = new JFrame("HiFi Messenger");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        title = new JLabel("Press start to send a message, or press random", SwingConstants.CENTER);

        title.setFont(title.getFont().deriveFont(15.0f));

        play = new JButton("Start");
        pause = new JButton("Stop");
        random = new JButton("Random");

        play.setFont(play.getFont().deriveFont(13.0f));
        play.setActionCommand("Start");
        play.addActionListener(this::actionPerformed);

        pause.setFont(pause.getFont().deriveFont(13.0f));
        pause.setActionCommand("Stop");
        pause.addActionListener(this::actionPerformed);

        random.setFont(random.getFont().deriveFont(13.0f));
        random.setActionCommand("Random");
        random.addActionListener(this::actionPerformed);

        controls = new JPanel();
        frame.setContentPane(controls);
        controls.setBorder(new EmptyBorder(10, 20, 10, 20));

        GroupLayout layout = new GroupLayout(frame.getContentPane());
        frame.getContentPane().setLayout(layout);
        layout.setAutoCreateGaps(true);
        layout.setAutoCreateContainerGaps(true);

        layout.setHorizontalGroup(layout.createParallelGroup(GroupLayout.Alignment.CENTER)
            .addGroup(layout.createSequentialGroup().addComponent(title))
            .addGroup(layout.createSequentialGroup().addComponent(play).addComponent(pause).addComponent(random)));

        //        layout.linkSize(SwingConstants.HORIZONTAL);
        layout.linkSize(SwingConstants.HORIZONTAL, play, pause, random);

        layout.setVerticalGroup(layout.createSequentialGroup()
            .addGroup(layout.createParallelGroup().addComponent(title))
            .addGroup(layout.createParallelGroup().addComponent(play).addComponent(pause).addComponent(random)));

        frame.pack();
        frame.setVisible(true);
    }

    private static void runGUI() {
        JFrame.setDefaultLookAndFeelDecorated(true);

        runner celebrity = new runner();
    }

    public static String audioPathFinder(String key) {

        if (chooseRandom) {
            Random rand = new Random();
            switch (rand.nextInt(42) + 1) {
                case 1:
                    key = "A";
                    break;
                case 2:
                    key = "B";
                    break;
                case 3:
                    key = "C";
                    break;
                case 4:
                    key = "D";
                    break;
                case 5:
                    key = "E";
                    break;
                case 6:
                    key = "F";
                    break;
                case 7:
                    key = "G";
                    break;
                case 8:
                    key = "H";
                    break;
                case 9:
                    key = "I";
                    break;
                case 10:
                    key = "J";
                    break;
                case 11:
                    key = "K";
                    break;
                case 12:
                    key = "L";
                    break;
                case 13:
                    key = "M";
                    break;
                case 14:
                    key = "N";
                    break;
                case 15:
                    key = "O";
                    break;
                case 16:
                    key = "P";
                    break;
                case 17:
                    key = "Q";
                    break;
                case 18:
                    key = "R";
                    break;
                case 19:
                    key = "S";
                    break;
                case 20:
                    key = "T";
                    break;
                case 21:
                    key = "U";
                    break;
                case 22:
                    key = "V";
                    break;
                case 23:
                    key = "W";
                    break;
                case 24:
                    key = "X";
                    break;
                case 25:
                    key = "Y";
                    break;
                case 26:
                    key = "Z";
                    break;
                case 27:
                    key = "Enter";
                    break;
                case 28:
                    key = "Space";
                    break;
                case 29:
                    key = "Period";
                    break;
                case 30:
                    key = "Comma";
                    break;
                case 31:
                    key = "/";
                    break;
                case 32:
                    key = "1";
                    break;
                //                case 33:
                //                    key = "a";
                //                    break;
                //                case 34:
                //                    key = "a";
                //                    break;
                //                case 35:
                //                    key = "a";
                //                    break;
                //                case 36:
                //                    key = "a";
                //                    break;
                //                case 37:
                //                    key = "a";
                //                    break;
                //                case 38:
                //                    key = "a";
                //                    break;
                //                case 39:
                //                    key = "a";
                //                    break;
                //                case 40:
                //                    key = "a";
                //                    break;
                //                case 41:
                //                    key = "a";
                //                    break;
                //                case 42:
                //                    key = "a";
                //                    break;
                //                case 43:
                //                    key = "a";
                //                    break;

            }
        }

        switch (key) {
            case "A":
                return "Sounds\\43404__simkiott__record-scratch.wav";
            case "B":
                return "Sounds\\56401__oliver-eye__jsplash2.wav";
            case "C":
                return "Sounds\\103525__mik300z__r2-talk.wav";
            case "D":
                return "Sounds\\124907__greencouch__bleeps-double-4.wav";
            case "E":
                return "Sounds\\140867__juskiddink__boing.wav";
            case "F":
                return "Sounds\\161153__dj-burnham__bike-horn.wav";
            case "G":
                return "Sounds\\170230__roachpowder__stone-pale-ale-bottle-clank.wav";
            case "H":
                return "Sounds\\178820__felfa__busy-signal-us.wav";
            case "I":
                return "Sounds\\188869__plingativator__jawharp-boing.wav";
            case "J":
                return "Sounds\\198162__18hiltc__darth-vader-breathing.wav";
            case "K":
                return "Sounds\\198876__bone666138__crash.wav";
            case "L":
                return "Sounds\\217351__vkproduktion__deflating-balloon.wav";
            case "M":
                return "Sounds\\219506__jarredgibb__microwave-bleeps-01.wav";
            case "N":
                return "Sounds\\221642__eggsandwichent__ba-dum-bum-all.wav";
            case "O":
                return "Sounds\\232927__bmusic92__mac-start-up.wav";
            case "P":
                return "Sounds\\245740__2mbst1__ruelps-18.wav";
            case "Q":
                return "Sounds\\249550__fngersounds__dong1.wav";
            case "R":
                return "Sounds\\258020__kodack__arcade-bleep-sound.wav";
            case "S":
                return "Sounds\\273984__metaepitome__cartoon-sound-02.wav";
            case "T":
                return "Sounds\\276046__obxjohn__cartoon-clearing-head-sound.wav";
            case "U":
                return "Sounds\\277044__bnabors1__a-very-nice-burp.wav";
            case "V":
                return "Sounds\\345688__inspectorj__comedic-whistle-a.wav";
            case "W":
                return "Sounds\\345689__inspectorj__comedic-boing-a.wav";
            case "X":
                return "Sounds\\348791__nebyoolae__toy-ducks-quacking.wav";
            case "Y":
                return "Sounds\\377639__danarobinsondesignsgmailcom__b15.wav";
            case "Z":
                return "Sounds\\384188__inspectorj__rooster-crowing-a.wav";
            case "Space":
                return "Sounds\\386857__bustercherry__squeaky-ringer.wav";
            case "Enter":
                return "Sounds\\389288__themaggotr__xilofono-sound-wet.wav";
            case "1":
                return "Sounds\\410751__plantmonkey__arrow-strike.wav";
            case "/":
                return "Sounds\\418106__crazymonke9__single-dog-bark-2.wav";
            case "Period":
                return "Sounds\\442906__qubodup__pig-oink.wav";
            case "Comma":
                return "Sounds\\446000__breviceps__fart-3.wav";
            default:
                return "";

        }
    }

    public static void main(String[] args) {
        try {
            UIManager.setLookAndFeel(UIManager.getSystemLookAndFeelClassName());
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (InstantiationException e) {
            e.printStackTrace();
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        } catch (UnsupportedLookAndFeelException e) {
            e.printStackTrace();
        }
        javax.swing.SwingUtilities.invokeLater(new Runnable() {
            @Override public void run() {
                runGUI();
            }
        });

        KeyChecker checker = new KeyChecker();
        checker.run();

        PlaySound player = new PlaySound();

        String audioFile = "";

        while (true) {

            //            KeyChecker.setRunning(true);
            ////
            ////            System.out.println(KeyChecker.getRunning());
            //
            //            if (KeyChecker.getRunning()) {
            //                System.out.println(KeyChecker.getKeysPressed());
            //                if (KeyChecker.getKeysSize() > 0) {
            try {
                player.play(audioPathFinder(KeyChecker.getKeysPressed().get(0)));
                KeyChecker.removeKeysPressed(0);
            } catch (Exception e) {

            }

            //                }
            //            }
        }
    }

    public void actionPerformed(ActionEvent event) {

        String eventName = event.getActionCommand();

        if (eventName.equals("Start")) {
            System.out.println("Started");
            KeyChecker.setRunning(true);
            chooseRandom = false;
        } else if (eventName.equals("Stop")) {
            System.out.println("Stopped");
            KeyChecker.setRunning(false);
            chooseRandom = false;
            for (int i = 0; i < KeyChecker.getKeysSize(); i++) {
                KeyChecker.removeKeysPressed(0);
            }
        } else if (eventName.equals("Random")) {
            System.out.println("Randomed");
            KeyChecker.setRunning(true);
            chooseRandom = true;
        }
    }

}
