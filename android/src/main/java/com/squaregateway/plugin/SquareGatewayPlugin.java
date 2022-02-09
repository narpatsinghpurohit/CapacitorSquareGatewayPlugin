package com.squaregateway.plugin;

import android.util.Log;

public class SquareGatewayPlugin {

    public String echo(String value) {
        Log.i("Echo", value);
        return value;
    }
}
