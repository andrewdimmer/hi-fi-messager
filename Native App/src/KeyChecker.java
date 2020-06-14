import org.jnativehook.GlobalScreen;
import org.jnativehook.NativeHookException;
import org.jnativehook.keyboard.NativeKeyEvent;
import org.jnativehook.keyboard.NativeKeyListener;

import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.LogManager;
import java.util.logging.Logger;

public class KeyChecker implements NativeKeyListener {



    private static ArrayList<String> keysPressed = new ArrayList<>();

    public static ArrayList<String> getKeysPressed() {
        return keysPressed;
    }

    public static void addKeysPressed(String key) {
        keysPressed.add(key);
    }

    public static void removeKeysPressed(int index) {
        keysPressed.remove(index);
    }

    public static int getKeysSize() {
        return keysPressed.size();
    }

    public static boolean getRunning() {
        return running;
    }

    public static void setRunning(boolean newRunning) {
        running = newRunning;
    }

    private static boolean running = false;

    public static void main(String[] args) {
        try {
            GlobalScreen.registerNativeHook();
        } catch (NativeHookException ex) {
            System.err.println("There was a problem registering the native hook.");
            System.err.println(ex.getMessage());

            System.exit(1);
        }

        GlobalScreen.addNativeKeyListener(new KeyChecker());
    }

    public void stop() {
        try {
            GlobalScreen.unregisterNativeHook();
        } catch (NativeHookException e) {
            e.printStackTrace();
        }
    }

    public void nativeKeyPressed(NativeKeyEvent e) {
        if (running) {
            keysPressed.add(NativeKeyEvent.getKeyText(e.getKeyCode()));
        }
    }

    public void nativeKeyReleased(NativeKeyEvent e) {
//        System.out.println("Key Released: " + NativeKeyEvent.getKeyText(e.getKeyCode()));
    }

    public void nativeKeyTyped(NativeKeyEvent e) {
//        System.out.println("Key Typed: " + e.getKeyText(e.getKeyCode()));
    }

    public void run() {

        // Clear previous logging configurations.
        LogManager.getLogManager().reset();

        // Get the logger for "org.jnativehook" and set the level to off.
        Logger logger = Logger.getLogger(GlobalScreen.class.getPackage().getName());
        logger.setLevel(Level.OFF);

        try {
            GlobalScreen.registerNativeHook();
        }
        catch (NativeHookException ex) {
            System.err.println("There was a problem registering the native hook.");
            System.err.println(ex.getMessage());

            System.exit(1);
        }

        GlobalScreen.addNativeKeyListener(new KeyChecker());
    }
}
